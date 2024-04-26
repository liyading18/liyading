## js 如何判断对象自身为空?

### 1. JSON.stringify

`JSON.stringify` 方法可以使对象序列化,转为相应的 `JSON` 格式
```js
const obj = {}
console.log(JSON.stringify(obj) === '{}')  // true
```
<b>缺点:</b>如果存在 `undefined`、任意的函数以及`symbol`值，在序列化过程中会被忽略 (出现在非数组对象的属性值中时) 或者被转换成`null`(出现在数组中时)
<br />

如下示例:

```js
const obj = {
    a: undefined,
    b: function() {},
    c: Symbol()
}

console.log(JSON.stringify(obj) === '{}')  // true
```

### 2. for in 配合 hasOwnProperty

使用 `for in`对当前对象进行遍历:

```js
const obj = {}
Object.prototype.a = 1

function isEmptyObj(obj) {
    let flag = true
    for (let o in obj) {
        flag = false
        break
    }
    return flag
}

console.log(isEmptyObj(obj))  // false
```

由于 `for in` 在进行对象遍历时，会遍历对象原型上的属性，而我们只希望得到其自身的属性，这时可以使用 `hasOwnProperty` 来实现，如下:

```js
const obj = {}
Object.prototype.a = 1

function isEmptyObj(obj) {
    let flag = true
    for (let o in obj) {
        if (obj.hasOwnProperty(o)) {
            flag = false
            break
        }
    }
    return flag
}

console.log(isEmptyObj(obj))  // true
```

<b>缺点：</b>`for in`不能遍历不可枚举的属性

### 3. Object.keys

`Object.keys`会返回对象自身可枚举属性组成的数组，而不会遍历原型上的属性

```js
const obj = {}
Object.prototype.a = 1

console.log(Object.keys(obj).length === 0)  // true
```

<b>缺点：</b>`Object.keys` 和 `for in`都只能遍历可枚举属性，不能遍历不可枚举的属性
<br />
我们使用`Object.defineProperty`将属性`enumerable`设置为`false`来进行测试，示例如下：

```js
const obj = {}
Object.defineProperty(obj, 'a', {
    value: 1,
    enumrable: false
})

console.log(obj.a)  // 1
console.log(isEmptyObj(obj))  // true
console.log(Object.keys(obj).length === 0)  // true
```

### 4. Object.getOwnPropertyNames

使用`Object.getOwnPropertyNames`可以得到对象自身的所有属性名组成的数组（包括不可枚举属性）

```js
const obj = {}
Object.defineProperty(obj, 'a', {
    value: 1,
    enumerable: false
})

console.log(Object.getOwnPropertyNames(obj))  // ['a']
```

<b>缺点：</b>不能获取`Symbol`值作为名称的属性，以上的`JSON.stringify`、`for in`以及`Object.keys`方法也不能获取`Symbol`值作为名称的属性，示例如下：

```js
const a = Symbol()
const obj = {
    [a]: 1
}

console.log(obj)  // { [Symbol()]: 1 }
console.log(Object.getOwnPropertyNames(obj).length === 0)  // true
console.log(JSON.stringify(obj) === '{}')  // true
console.log(isEmptyObj(obj))  // true
console.log(Object.keys(obj).length === 0)  // true
```

### 5. Object.getOwnPropertyNames 结合 Object.getOwnPropertySymbols

已知 `Objecy.getOwnPropertyNames`唯一的缺点是不能获取`Symbol`值作为名称的属性，而`Objecy.geOwnPropertySymbols`只能获取由`Symbol`
值作为名称的属性，两者结合是不是就可以完美解决了，我们来简单测试一下：

```js
const a = Symbol()
const obj1 = {
    [a]: 1
}
const obj2 = { b: 2 }
const obj3 = {}
Object.defineProperty(obj3, 'a', {
    value: 1,
    enumerable: false
})
const obj4 = {}

function getLength(obj) {
    return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj)).length
}

console.log(getLength(obj1) === 0)  // false
console.log(getLength(obj2) === 0)  // false
console.log(getLength(obj3) === 0)  // false
console.log(getLength(obj4) === 0)  // true
```

经过测试，上面这种方法的确可以解决，但是比较繁琐，那有没有更好的方法呢？答案是有的

### 6. Reflect.ownKeys

`Reflect.ownKeys`方法返回一个由目标对象自身的属性组成的数组，它的返回值等同于`Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target))`，
示例如下：

```js
const a = Symbol()
const obj1 = {
    [a]: 1
}
const obj2 = { b: 2 }
const obj3 = {}
Object.defineProperty(obj3, 'a', {
    value: 1,
    enumrable: false
})
const obj4 = {}

console.log(Reflect.ownKeys(obj1).length === 0)  // false
console.log(Reflect.ownKeys(obj2).length === 0)  // false
console.log(Reflect.ownKeys(obj3).length === 0)  // false
console.log(Reflect.ownKeys(obj4).length === 0)  // true
```

### 总结
判断一个对象是否为空时，使用`Reflect.ownKeys`方法最为完美

## 数组去重方法

### 使用原生`JavaScript`方法
<br />

#### 1. `filter()` 方法配合 `indexOf()`
**该方法只适用于简单数据类型（基础数据类型）**
```js
const array = [1, 1, 2, 3, 4]
const uniqueArray = array.filter((item, index, self) => {
  return self.indexOf(item) === index;
});

console.log(uniqueArray)  // [1, 2, 3, 4]
```
该方法利用` filter() `遍历数组，对于每个元素，通过 `indexOf()` 查找其在原数组中的第一个索引。如果当前元素的索引与正在遍历的索引相同，说明这是该元素在数组中的首次出现，保留该元素；否则，忽略该元素。<br /><font color=red>filter 的 第三个参数 self 代表数组本身</font>。

#### 2. `reduce()` 方法
**该方法只适用于简单数据类型（基础数据类型）**
```js
const array = [1,1,1,2,3,4]
const uniqueArray = array.reduce((acc, current) => {
  return acc.includes(current) ? acc : [...acc, current];
}, []);

console.log(uniqueArray)  // [1, 2, 3, 4]
```
这里使用 `reduce() `函数将数组累积到一个新的数组（`acc`）中。在每次迭代中，检查当前元素是否已存在于累积数组中。若不存在，则将其添加至累积数组；否则，跳过该元素。

### 利用 `ES6` 新特性
<br />

#### 1. 使用扩展运算符与解构赋值
**该方法只适用于简单数据类型（基础数据类型）**
```js
const array = [1, 1, 2, 3, 4]
const uniqueArray = [...new Set(array)];

console.log(uniqueArray)  // [1, 2, 3, 4]
```
这种方法简洁高效，利用 ES6 的 `Set` 数据结构自动去除重复元素的特性，再通过扩展运算符将 `Set` 转换回数组。`Set` 是一种特殊的集合，不允许重复元素存在，因此插入过程会自动过滤重复项。
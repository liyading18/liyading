# 数组去重方法

## 只适用于数组内是简单数据类型（基础数据类型）

### 1. 使用扩展运算符与解构赋值
```js
const array = [1, 1, 2, 3, 4]
const uniqueArray = [...new Set(array)];

console.log(uniqueArray)  // [1, 2, 3, 4]
```
这种方法简洁高效，利用 ES6 的 `Set` 数据结构自动去除重复元素的特性，再通过扩展运算符将 `Set` 转换回数组。`Set` 是一种特殊的集合，不允许重复元素存在，因此插入过程会自动过滤重复项。

### 2. `Set + Array.from`
```js
function noRepeat(arr) {
  return Array.from(new Set(arr));
}
noRepeat([1,2,3,1,2,3]) // [1,2,3]
```

### 3. `filter()` 方法配合 `indexOf()`
```js
const array = [1, 1, 2, 3, 4]
const uniqueArray = array.filter((item, index, self) => {
  return self.indexOf(item) === index;
});

console.log(uniqueArray)  // [1, 2, 3, 4]
```
该方法利用` filter() `遍历数组，对于每个元素，通过 `indexOf()` 查找其在原数组中的第一个索引。如果当前元素的索引与正在遍历的索引相同，说明这是该元素在数组中的首次出现，保留该元素；否则，忽略该元素。<br /><font color=red>filter 的 第三个参数 self 代表数组本身</font>。

### 4. 双重遍历比对下标
```js
function noRepeat(arr) {
  return arr.filter((v, idx)=>idx == arr.lastIndexOf(v))
}
noRepeat([1,2,3,1,2,3]) // [1,2,3]
```

### 5. `reduce()` 方法
```js
const array = [1,1,1,2,3,4]
const uniqueArray = array.reduce((acc, current) => {
  return acc.includes(current) ? acc : [...acc, current];
}, []);

console.log(uniqueArray)  // [1, 2, 3, 4]
```
这里使用 `reduce() `函数将数组累积到一个新的数组（`acc`）中。在每次迭代中，检查当前元素是否已存在于累积数组中。若不存在，则将其添加至累积数组；否则，跳过该元素。

### 6. 利用 `Map` 数据结构
```js
const array = [1, 1, 2, 3, 4]
const uniqueArray = Array.from(new Map(array.map(item => [item, item])).values());

console.log(uniqueArray)  // [1, 2, 3, 4]
```
尽管不如直接使用 `Set` 直观，但此方法同样有效。它首先将数组映射为键值对相同的 `Map`，由于 `Map` 键的唯一性，重复的数组元素会被自动忽略。然后通过 `Array.from()` 和 `Map.values() `将 `Map` 的值（即无重复元素）转换回数组。

### 7. 单遍历 + Object 特性
```js
function noRepeat(arr) {
  return Object.values(arr.reduce((s,n)=>{
    s[n] = n;
    return s
  },{}))
}
noRepeat([1,2,3,1,2,3]) // [1,2,3]
```
Object 的特性是 Key 不会重复。<br />
这里使用 values 是因为可以保留类型，keys 会变成字符串。

## 数组内是基础/复杂数据类型均可用

### 1. 利用对象作为哈希表
```js
// const array = [1,1,2,3]
// const array = [{id:1}, {id:1}, {id:2}]
const uniqueArray = [];
const hashTable = {};
for (let i = 0; i < array.length; i++) {
  const item = array[i];
  if (!hashTable[item]) {
    uniqueArray.push(item);
    hashTable[item] = true;
  }
}
// console.log(uniqueArray) // [1,2,3]  // [{id:1},{id:2}]
```

## 性能比较与优化策略
:::info 性能比较
+ `filter() + indexOf()`：线性时间复杂度` O(n^2)`，适合小型数据集。
+ `reduce()`：线性时间复杂度 `O(n^2)`，适合小型数据集。
+ 扩展运算符与 `Set`：近乎线性时间复杂度` O(n)`，非常高效，适合各种规模的数据集。
+ `Map`：近乎线性时间复杂度 `O(n)`，非常高效，适合各种规模的数据集。
+ `哈希表：`近乎线性时间复杂度` O(n)`，高效，适合各种规模的数据集。
:::
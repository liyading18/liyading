## v-for 和 v-if 为什么不共存？

### vue2
```js
<div id="app">
    <div v-for="item in [1, 2]" v-if="item !== 2"></div>
</div>
```
想要获取答案，可以打开这个网站：[https://v2.template-explorer.vuejs.org/](https://v2.template-explorer.vuejs.org/)<br />
这是一个解析`Vue2`代码的网站，能把`Vue`代码解析成最终的产物代码
![vue2产物代码](/image/blogs/study/other/for01.png)

其实重要的部分在这里
![vue2产物代码](/image/blogs/study/other/for02.png)

可以看到在`Vue2`中，<b>会先循环，然后在循环中去判断</b>，判断为真则正常渲染，判断为假则执行`_e`函数，`_e`函数就是注释的意思，就是把判断为假的节点注释掉，也就是：
1. 先走`v-for`循环 3 次
2. 在循环体中走`v-if`判断
3. 判断`item !== 2`则正常渲染，`item === 2`则把这个节点注释掉

所以最终选出来 1、3 两个节点大家能理解为什么`Vue2`会警告你了吗？<br />
<b>因为其实我们只需要渲染2个节点，但是最终还是循环了3次，造成了性能浪费，也就是 v-for 优先级高于 v-if，共存时会造成性能浪费</b>

### vue3
但是在`Vue3`中，`v-for`和`v-if`却是可以共存的，为什么呢？我们还是拿最简单的代码来分析
```js
<template>
    <div v-for="item in [1, 2, 3]" v-if="item 1==2"></div>
</template>
```
我们可以到这个网站：[https://play.vuejs.org/](https://play.vuejs.org/)，看到解析后的产物
![vue3产物代码](/image/blogs/study/other/for03.png)

重要部分在这里
![vue3产物代码](/image/blogs/study/other/for04.png)

可以看到，跟`Vue2`不同的是，`Vue3`中是先走判断，然后再走循环的，也就是：
1. 先走`v-if`判断
2. 如果`item !== 2`，就去走循环也就是`v-for`
3. 如果`item == 2`，就执行`createCommandVNode`，创建一个注释节点

<b>也就是在`Vue3`中，`v-if`优先级是高于`v-for`的，真正循环的只有1、3这两个节点，这提高了性能</b>

但是我们会看到，代码会报错：** item 找不到**？
![vue3产物代码](/image/blogs/study/other/for05.png)

这是因为在`v-for`和`v-if`共存的时候，`Vue3`会在底层帮我们转换成
```js
<template>
    <template v-if="item !==2">
        <div v-for="item in [1, 2, 3]"></div>
    </template>
</template>
```
不信我们可以看看转换后的产物，跟刚刚是一模一样的！！！
![vue3产物代码](/image/blogs/study/other/for06.png)

`item`是在外层的，所以报错说`item`找不到，大家都知道为啥了吧？在外层怎么能获取到`item`呢？

### 总结
总结就是不要让`v-if`和`v-for`共存在同一个标签中，遇到这种情况需要使用`computed`去计算，然后再去渲染
```js
<div v-for="item in list" :key="item"></div>

<script setup lang="ts">
import { computed } from 'vue'
const list = computed(() => [1, 2, 3].filter(item => item !== 2))
</script>
```

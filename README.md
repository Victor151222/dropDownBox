# 模拟实现下拉框组件

> 工具：`vue` ，`bootstrap` ，`webpack`
>
> [线上预览](http://www.victor.ac.cn/vue/dropDownBox/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
## 基本要求

1. 基本功能同浏览器的下拉框组件：满足
2. 兼容尽量多的浏览器：因为使用了新的框架`vue`，所以对`IE8`以下的浏览器不兼容。其它都兼容。
3. 支持直接输入：满足
4. 输入时下拉列表的选项自动前缀匹配：满足
5. 匹配到的前缀用红色文字展示：满足

## 扩展要求

1. 支持异步加载数据：满足

2. 支持大量数据（比如`10w+`，考虑如何提高效率）

   因为是大量数据，所以尽量把逻辑交给后台来处理。可以使用`radis`或者`node`里面数据流的操作。

   前端面对大量数据，可以使用虚拟树原理，减少页面的渲染次数。

3. 用测试代码来测试组件功能：满足

## 踩过的坑

1. 跨域请求百度接口时，注意本地配置文件设置代理只对开发环境有效，生成环境则出现问题。于是采用`PlanB：jsonp`方案。

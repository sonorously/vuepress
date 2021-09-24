# Diff算法

[diff算法核心原理](https://juejin.cn/post/6994959998283907102?utm_source=gold_browser_extension)

[diff算法](https://juejin.cn/post/7000266544181674014?utm_source=gold_browser_extension)

虚拟DOM比真实DOM快这句话其实是错的，或者说是不严谨的。那正确的说法是什么呢？虚拟DOM算法操作真实DOM，性能高于直接操作真实DOM，虚拟DOM和虚拟DOM算法是两种概念。虚拟DOM算法 = 虚拟DOM + Diff算法

总结：Diff算法是一种对比算法。对比两者是旧虚拟DOM和新虚拟DOM，对比出是哪个虚拟节点更改了，找出这个虚拟节点，并只更新这个虚拟节点所对应的真实节点，而不用更新其他数据没发生改变的节点，实现精准地更新真实DOM，减少DOM的操作(重排重绘)。



使用虚拟DOM算法的损耗计算： 总损耗 = 虚拟DOM增删改+（与Diff算法效率有关）真实DOM差异增删改+（较少的节点）排版与重绘

直接操作真实DOM的损耗计算： 总损耗 = 真实DOM完全增删改+（可能较多的节点）排版与重绘





### 为什么要使用虚拟DOM

- MVVM框架解决视图和状态同步问题
- 模板引擎可以简化视图操作,没办法跟踪状态
- 虚拟DOM跟踪状态变化
- 参考github上virtual-dom的动机描述
  - 虚拟DOM可以维护程序的状态,跟踪上一次的状态
  - 通过比较前后两次状态差异更新真实DOM
- 跨平台使用
  - 浏览器平台渲染DOM
  - 服务端渲染SSR(Nuxt.js/Next.js),前端是vue向,后者是react向
  - 原生应用(Weex/React Native)
  - 小程序(mpvue/uni-app)等
- 真实DOM的属性很多，创建DOM节点开销很大
- 虚拟DOM只是普通JavaScript对象，描述属性并不需要很多，创建开销很小
- **复杂视图情况下提升渲染性能**(操作dom性能消耗大,减少操作dom的范围可以提升性能)


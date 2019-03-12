##### 完成
>如果不知道怎么写就参考官方文档案例
- UI组件 ant-design。按需加载 参考antd文档
    - 修改默认样式，根据css权重高
- 使用node-scss 参考create-react-app文档
- 参考搭建后台管理系统：https://www.jianshu.com/p/c0ba97f2b6a1
- 前端权限管理
    - 路由4.x权限控制方法
        - 匹配路由完成后进入页面，在每个页面的componentWillMount（此时render方法没执行，页面未渲染）生命周期方法中验证是否有token，没有就跳转登录，比较麻烦
        - 封装一个私有路由或者高阶组件，在刚匹配路由的时候就判断是否有token，详见RequireAuth.js
    - 封装axios：请求接口根据返回结果判断token是否过期，是否需要重新登录
    - 进入首页后根据接口返回结果渲染左侧可见的模块
- react-loadable按需加载react组件
- react-content-loader骨架屏
- redux (https://juejin.im/post/5b755537e51d45661d27cdc3#heading-2)使用原生 Redux，一个常见的请求处理如下。非常冗余，这是 Redux 被很多人诟病的原因
- 首页布局：参考antd文档侧边布局

#### 遇到问题
- 使用嵌套路由在父级不能用exact， 因为当你匹配路由时路径加了子路由，导致父级路由路径不匹配从而父子组件都显示不了
- children有时候你可能只想知道访问地址是否被匹配，然后改变下别的东西，而不仅仅是对应的页面。
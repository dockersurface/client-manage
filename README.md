##### 添加依赖
- UI组件 ant-design。按需加载 参考antd文档
- 使用node-scss 参考create-react-app文档
- 前端权限管理
    - 路由4.x权限控制方法
        - 匹配路由完成后进入页面，在每个页面的componentWillMount（此时render方法没执行，页面未渲染）生命周期方法中验证是否有token，没有就跳转登录，比较麻烦
        - 封装一个私有路由或者高阶组件，在刚匹配路由的时候就判断是否有token，详见RequireAuth.js
    - 封装axios：请求接口根据返回结果判断token是否过期，是否需要重新登录
    - 进入首页后根据接口返回结果渲染左侧可见的模块
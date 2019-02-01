import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../screen/Login';
import Home from '../screen/Home'; // 需要验证是否有token才能进入
import RequireAuth from './RequireAuth'; // 路由权限验证方法：1.封装私有组件 2.高阶组件
import NoMatch from '../screen/NoMatch'; // 输入路径不匹配时显示

class Routers extends Component {
    render () {
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <RequireAuth path='/home' component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

export default Routers;
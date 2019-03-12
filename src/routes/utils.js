import React from 'react';
import { Route, Redirect } from "react-router-dom";

// 将路径和组件匹配
export const RouteWithSubRoutes = route => (<Route
        path={route.path}
        exact={route.exact}
        render={props =>{
            const isLogged = localStorage.getItem("token");
            if ( !(typeof route.meta === 'object' && route.meta.isAuth) && !isLogged ) {
                return <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            }
            return (
                route &&( route.Redirect ? (<Redirect to={route.Redirect}></Redirect>) :
                (<route.component {...props} routes={route.routes} />))
            )
        }}
    />
);
// 循环渲染当前路由数组中一维数组中的组件
export const RenderRoutes = ({routes}) => {return (routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />))};

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
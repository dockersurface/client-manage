import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

export default class RequireAuth extends Component {
    render () {
        const { component: Component, ...rest } = this.props
        const isLogged = localStorage.getItem("token") ? true : false;
        // console.log(this.props, isLogged)
        return(
            <Route {...rest} render={props => {
                return isLogged
                    ? <Component {...props} />
                    : <Redirect to="/" />
            }} />
        )
    }
}
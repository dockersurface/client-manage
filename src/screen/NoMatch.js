import React, { Component } from 'react';

export default class NoMatch extends Component {
    render () {
        return(
            <div>No match for <code>{this.props.location.pathname}</code></div>
        )
    }
}
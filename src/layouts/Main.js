import React, { Component } from 'react';
import { RenderRoutes } from '../routes/utils'

class Crumbs extends Component {
    render() {
        let { routes } = this.props;
        return (
            <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 200px)' }}>
              <RenderRoutes routes={routes} ></RenderRoutes>
            </div>
        )
    }
}

export default Crumbs;
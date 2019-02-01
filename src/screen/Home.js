import React, { Component } from 'react';
import { Button } from 'antd';

export default class Home extends Component {
    render () {
        return(
            <div>
                <div>需要权限才能查看</div>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}
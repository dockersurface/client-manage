import React, { Component } from 'react';
import { Layout } from 'antd';
import Crumbs from '../../layouts/Crumbs';
import MyHeader from '../../layouts/Header';
import MyMain from '../../layouts/Main';
import MyFooter from '../../layouts/Footer';
// import MyTabs  from '../components/Tabs.js'
import MySider  from '../../layouts/Sider';
import './index.scss';
const { Content } = Layout;

class Index extends Component {
    state = {
    }
    render() {
        let { routes } = this.props;
        return (
            <Layout style={{ minHeight: '100vh'}}>
                <MySider />
                <Layout>
                    <MyHeader />
                    <Content style={{ margin: '0 16px' }}>
                        <Crumbs />
                        <MyMain routes={ routes } />
                    </Content>
                    <MyFooter />
                </Layout>
            </Layout>
        );
    }
}

export default Index;
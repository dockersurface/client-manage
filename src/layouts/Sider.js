import React, { Component } from 'react';
import { Menu, Layout, Icon } from 'antd';
import './sider.scss';
import { menus } from '../routes/index';
import { Link } from "react-router-dom";
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MySider extends Component {
  state = {
    collapsed: false,
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }
  render() {
    
    const SiderMenu = menus.map((item, index) => {
        if(Array.isArray(item.routes)) {
          return (
            <SubMenu
              key={index}
              title={
                <span className="nav-text">
                  <Icon type={item.icon}></Icon>
                  <span>{item.name}</span>
                </span>
              }
            >
              {
                item.routes.map((nav, i) => {
                  return (
                    <Menu.Item key={i}>
                      <Link to={nav.path}>{nav.name}</Link>
                    </Menu.Item>
                  )
                })
              }
            </SubMenu>
          )
        }
        return (
          <Menu.Item key={index}>
            <Link to={item.path}>
              <span className="nav-text">
                  <Icon type={item.icon} />
                  <span>{item.name}</span>
              </span>
            </Link>
          </Menu.Item>
        )
      })

    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="logo" />
        <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
          {SiderMenu}
        </Menu>
      </Sider>
    )
  }
}

export default MySider
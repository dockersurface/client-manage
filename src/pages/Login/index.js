import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import auth from '../../api/auth';
import './index.scss';

class Login extends Component {
    componentWillMount() {
        console.log(this.props)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields(async(err, values) => {
          if (!err) {
            let { username, password} = values;
            let res = await auth.login({username, password});
            if(res.code === 0) {
                localStorage.setItem('token', res.token);
                this.props.history.push('/');
            }
          }
        });
    }
    render () {
        const { getFieldDecorator } = this.props.form;
        return(
            <Form className='login-form' onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    {/* eslint-disable-next-line */}
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        )
    }
}

export default Form.create()(Login);
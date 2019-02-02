import axios from 'axios';
import { notification } from "antd";

const showSuccess = message => {
    notification.success({
        message: "Success",
        description: message
    });
};

const showError = message => {
    notification.error({
        message: "Error",
        description: message
    });
};
// axios.defaults.baseURL = '111.231.87.221';
axios.defaults.timeout = 60000;

axios.interceptors.request.use(
    function(config) {
        return config;
    },
    function() {
        return {
            data: {
                code: -1,
                msg: "发送请求失败"
            }
        }
    }
)

axios.interceptors.response.use(
    function(response) {
        if (response.status === 200) {
            if (response.data.code === -2 || response.data.code === -1) {
                if (response.data.msg) {
                    showError(response.data.msg);
                } else {
                    showError("接口出错或没有权限");
                }
            } else if (response.data.code === 0) {
                let message;
                if (response.data.msg) {
                    message = response.data.msg;
                } else if (response.data.message) {
                    message = response.data.message;
                }
                if (message) {
                    showSuccess(message);
                }
            }
        }
        // //自动更新token
        // if (response.data.token) {
        //     localStorage.setItem("token", response.data.token);
        // }
        return response.data;
    },
    function(error) {
        if (!error.response) {
            showError("网络超时。");
            return {
                data: {
                    code: -1,
                    msg: "网络超时。"
                }
            };
        }
        // Do something with response error
        // return Promise.reject(error);
        if (error.response.status) {
            if (error.response.status === 422) {
                error.response.data.code = -1;
                return error.response;
            } else if (error.response.status === 401) {
                //服务器返回unauthorized，表示登录超时
                if (error.response.data.error === "unauthorized") {
                    if (error.response.data.force_logout) {
                        setTimeout(() => {
                            showError("登录超时：" + error.response.data.force_logout);
                        }, 600);
                    }
                    localStorage.removeItem("token");
                }
            }
        }
        return {
            data: {
                code: -1,
                msg: "请求失败。"
            }
        };
    }
)

let post = (url, data) => {
    return axios.post(url, data);
};
let get = url => {
    return axios.get(url);
};

let tget = (url) => {
    let token = localStorage.getItem('token');
    //如果不存在token，直接显示登录
    if (token == null) {
        alert("登录超时");
    }
    return axios.get(url, {
        headers: {
            Authorization: "Bearer " + token
        },
    });
};
//带token请求
let tpost = (url, data) => {
    let token = localStorage.getItem('token');
    //如果不存在token，直接显示登录
    if (token == null) {
        alert("登录超时");
    }
    return axios.post(url, data, {
        headers: {
            Authorization: "Bearer " + token
        }
    });
};

export default { post, tpost, get, tget };
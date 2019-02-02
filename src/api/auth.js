import request from './base';

export default class Auth {
    static login(data) {
        let url = '/login';
        return request.post(url, data);
    }
}
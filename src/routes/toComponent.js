import Loadable from 'react-loadable';
import ContentLoader from '../components/MyContentLoader';

export const Login = Loadable({
    loader: () => import('../pages/Login/index'),
    loading: ContentLoader
});
export const Index = Loadable({
    loader: () => import('../pages/index/index'),
    loading: ContentLoader
});
export const Register = Loadable({
    loader: () => import('../pages/Register/index'),
    loading: ContentLoader
});
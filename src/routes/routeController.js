import Home from '../client/components/home';
import Add from '../client/components/add';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
  },
  {
    path: '/add',
    exact: true,
    component: Add,
  },
]

export default routes;
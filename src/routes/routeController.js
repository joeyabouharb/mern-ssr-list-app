import Home from '../client/components/home';
import Add from '../client/components/add';
const routeController =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/add',
    component: Add,
  },
]

export default routeController;
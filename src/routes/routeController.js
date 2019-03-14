import Home from '../client/components/home';
import Add from '../client/components/add';
import {getNotes} from '../services/noteService';
const routeController =  [
  {
    path: '/',
    exact: true,
    component: Home,
    getNotes: getNotes(),
  },
  {
    path: '/home',
    exact: true,
    component: Home,
    getNotes: getNotes(),
  },
  {
    path: '/add',
    exact: true,
    component: Add,
  },
]

export default routeController;
import Home from '../client/components/home';
import Add from '../client/components/add';
import Note from '../client/components/Note'
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
  {
    path: '/note/:id',
    component: Note,

  }
]

export default routeController;
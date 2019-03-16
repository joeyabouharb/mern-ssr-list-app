import Home from '../client/components/home';
import Add from '../client/components/add';
import Note from '../client/components/Note'
import * as services from '../services/noteService';
const routeController =  [
  {
    path: '/',
    exact: true,
    component: Home,
    service : () => services.getNotes()
  },
  {
    path: '/home',
    component: Home,
    service : () => services.getNotes()
  },
  {
    path: '/add',
    component: Add,
    service : () => null
  },
  {
    path: '/note/:id',
    component: Note,
    service : (path = '') => services.getSingle(path) 
  }
]

export default routeController;
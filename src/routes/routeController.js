import Home from '../client/components/home';
import Add from '../client/components/add';
import Note from '../client/components/Note'
import Edit from '../client/components/edit';
import Delete from '../client/components/delete';
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
    service : () => null,
    postService : (note) => services.addNote(note)
  },
  {
    path: '/note/:id',
    component: Note,
    service : (path = '') => services.getSingle(path) 
  },
  {
    path: '/edit',
    component: Edit,
    service : () => null,
    postService : (note) => services.editNote(note),
  },
  {
    path : '/delete',
    component : Delete,
    service : () => null,
    postService : (note) => services.deleteNote(note),
  }
]

export default routeController;
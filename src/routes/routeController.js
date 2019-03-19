import Home from '../client/components/Home';
import Add from '../client/components/Add';
import Note from '../client/components/Note'
import Edit from '../client/components/Edit';
import Login from '../client/components/Login';
import Register from '../client/components/Register';
import * as noteService from '../services/noteService';
const routeController =  [
  {
    path: '/',
    exact: true,
    component: Home,
    service : () => noteService.getNotes()
  },
  {
    path: '/home',
    component: Home,
    service : () => noteService.getNotes()
  },
  {
    path: '/add',
    component: Add,
    postService : (note) => noteService.addNote(note)
  },
  {
    path: '/note/:id',
    component: Note,
    service : (path = '') => noteService.getSingle(path),
    postService : (_id) => noteService.deleteNote(_id),
  },
  {
    path: '/edit/:id',
    component: Edit,
    service : (path = '') => noteService.getSingle(path),
    postService : (note) => noteService.editNote(note),
  },
  {
    path: '/login',
    component: Login,
    postService : () => null,
  },
  {
    path: '/register',
    component: Register,
    postService : () => null,
  }
]

export default routeController;
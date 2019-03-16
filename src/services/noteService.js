import axios from 'axios';

export function getNotes(){
  return axios.get('http://localhost:8080/api/get-notes')
  .then((response) => {
    return response.data;
  }).catch(error => {throw error});
}

export function getSingle(id){
  return axios.get(`http://localhost:8080/api/note/${id}`)
  .then((response) => {
    return response.data;
  }).catch(error => {throw error})
}
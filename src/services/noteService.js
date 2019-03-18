import axios from 'axios';
const host = 'http://localhost:8080/api';
export function getNotes(){
  return axios.get(`${host}/get-notes`)
  .then((response) => {
    return response.data;
  }).catch(error => {throw error});
}

export function getSingle(id){
  return axios.get(`${host}/note/${id}`)
  .then((response) => {
    return response.data;
  }).catch(error => {throw error})
}
export function addNote(note){
  axios.post(`${host}/add`, note)
  .then((response) => {
    return response.status;
  }).catch(error => {
    throw error;
  });
}
export function editNote(note){
  axios.put(`${host}/edit`, note)
  .then((response) => {
    return response.status;
  }).catch(error => {
    throw error;
  });
}

export function deleteNote(_id){
  axios.delete(`${host}/delete/${_id}`)
  .then((response) => {
    return response.status;
  }).catch(error => {
    throw error;
  });
}
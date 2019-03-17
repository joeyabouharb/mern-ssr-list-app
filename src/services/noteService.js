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
    alert(response.data);
  }).catch(error => {
    throw error;
  });
}
export function editNote(note){
  axios.post(`${host}/edit`, note)
  .then((response) => {
    alert(response.data);
  }).catch(error => {
    throw error;
  });
}

export function deleteNote(note){
  axios.post(`${host}/delete`, note)
  .then((response) => {
    alert(response.data);
  }).catch(error => {
    throw error;
  });
}
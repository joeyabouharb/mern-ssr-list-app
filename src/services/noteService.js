import axios from 'axios';

export function getNotes(){
  axios.get('/api/get-notes')
  .then((response) => {
    console.log(response.data);
    return response.data;
  }).catch(error => {return error});
}
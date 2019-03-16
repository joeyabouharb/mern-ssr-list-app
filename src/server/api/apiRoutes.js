import express from 'express';
import Note from '../models/Note';
import mongoose from 'mongoose';
const routes = express.Router();

routes.get('/get-notes', (req, res) => {
  Note.find((err, notes) => {
    if(err){
      throw err;
    }else{
      res.json(notes)
    }
  })
})

routes.get('/note/:id', (req, res) => {
  const id = mongoose.Types.ObjectId(req.url.split('/').filter(el => el).pop());
  Note.findById(id, (err, note) =>{
    if(err){
      throw err;
    }else{
      res.json(note);
    }
  })
  
});

routes.post('/add', (req, res) =>{
  const { name, severity, description } = req.body;
  const newNote = new Note({
    name,
    severity,
    description,
  });
  newNote.save(err => {
   if(err) res.status(500).send(err);
   res.status(200).send('success');
  });  
})

module.exports = routes;
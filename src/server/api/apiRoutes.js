import express from 'express';
import Note from '../models/Note';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

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
  const path = req.url.split('/').filter(el => el).pop();
  const id = new ObjectId(path);
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

routes.put('/edit', (req, res) =>{
  const {_id, name, severity, description } = req.body;
  const id = new ObjectId(_id);
  const q = {_id: id}
  Note.findOneAndUpdate(q, {name, severity, description},
     (err) => {
      if(err) throw err;
      return res.status(200).send('success');
     })

})

routes.delete('/delete/:id', (req, res) =>{
  const {id} = req.params;
  Note.deleteOne({_id : id}, (err) => {
    if(err) res.status(404).send(err);
    res.status(200).send('success');
  });

})

module.exports = routes;
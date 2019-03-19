import express from 'express';
import Note from '../models/Note';
import mongoose from 'mongoose';
import User from '../models/User';
import bcryptjs from 'bcryptjs'
import * as jwt from 'jsonwebtoken';

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
  
  routes.post('')
})

routes.post('/register', (req, res) => {
  const {firstName,
        lastName,
        email,
        password,
        confirmPass} = req.body;

  if(!firstName || !lastName || !email || !password || !confirmPass) {
    return res.status(400).json({ msg: 'Please enter all fields' });
    }
  if(password === confirmPass){
    return res.status(400).json({ msg: 'Password Does not Match' });
  }
  User.findOne({email})
  .then(user => {
    if(user){
      res.status(400).json('User Already Exists');
    }
  })
  const newUser = new User({
    firstName,
    lastName,
    email,
    password,
  });
  bcryptjs.genSalt(12, (err, salt) =>{
    bcryptjs.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save()
      .then(user => {
        jwt.sign(
          {id: user._id},
          {jwtSecret: 'this is a secret!'},
          {expiresIn: 4000},
          (err, token) => {
            if(err) throw err;
            const {_id, firstName, lastName, email} = user; 
            const userSession = {_id, firstName, lastName, email};
            res.json(token,
            userSession);
          }
        )
      })
    })
  })

  routes.post('/login', (req, res) => {
    const {
      email,
      password,} = req.body;

if( !email || !password) {
  return res.status(400).json({ msg: 'Please enter all fields' });
  }

User.findOne({email})
.then(user => {
  if(!user){
    res.status(400).json('No matching credentials found, email/password may be incorrect');
    bcryptjs.compare(password, user.password)
    .then(valid => {
      if(!valid)  res.status(400).json('No matching credentials found, email/password may be incorrect');
      jwt.sign(
        {id: user._id},
        {jwtSecret: 'this is a secret!'},
        {expiresIn: 4000},
        (err, token) => {
          if(err) throw err;
          const {_id, firstName, lastName, email} = user; 
          const userSession = {_id, firstName, lastName, email};
          res.json(token,
          userSession);
        }
      )
    })
  }
})

})
module.exports = routes;
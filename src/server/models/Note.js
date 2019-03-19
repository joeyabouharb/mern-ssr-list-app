const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const NoteSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  _Author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  }
});
const Note = mongoose.model('note', NoteSchema);
module.exports = Note;
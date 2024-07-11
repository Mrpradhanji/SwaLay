const mongoose = require('mongoose');

// Define the schema
const lyricsSchema = new mongoose.Schema({
  Lyid: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: Math.pow(10, 20) - 1 // Maximum value for 20 digits
  },
  uid: {
    type: Number,
    required: true
  },
  Label_name: {
    type: String,
    required: true,
    maxlength: 50
  },
  Email_Address: {
    type: String,
    required: true,
    maxlength: 30
  },
  Phone_Number: {
    type: Number,
    required: true,
    min: 0,
    max: Math.pow(10, 12) - 1 // Maximum value for 12 digits
  },
  Song_Name: {
    type: String,
    required: true,
    maxlength: 50
  },
  Writer_Name: {
    type: String,
    required: true,
    maxlength: 50
  },
  Language: {
    type: String,
    required: true,
    maxlength: 50
  },
  Isrc: {
    type: String,
    required: true
  },
  Lyrics: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true,
    min: 0,
    max: Math.pow(10, 11) - 1 //
  },
});

// Create a unique index on the Lyid field
lyricsSchema.index({ Lyid: 1 }, { unique: true });

// Create the model
const Lyric = mongoose.models.Lyric ||  mongoose.model('Lyrics', lyricsSchema);

export default Lyric;

import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: Math.pow(10,11) - 1
  },
  uid: {
    type: Number,
    required: true,
    min: 0,
    max: Math.pow(10,11) - 1 
   
  },
  lable_name: {
    type: String,
    required: true
  },
  song_name: {
    type: String,
    required: true
  },
  ISRC: {
    type: String,
    required: true
  },
  artist_name: {
    type: String,
    required: true
  },
  spotify: {
    type: String,
    required: true
  },
  itunes: {
    type: String,
    required: true
  },
  jiosavan: {
    type: String,
    required: true
  },
  amazon: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
});
//id Primary key
artistSchema.index({ id: 1 }, { unique: true });

const Artist =  mongoose.models.Artist||mongoose.model('Song', artistSchema);

export default Artist;

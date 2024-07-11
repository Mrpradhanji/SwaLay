import mongoose from "mongoose";



const youtubeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: 99999999999 // Maximum value for 11 digits
  },
  link: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  },
  status: {
    type: String,
    maxlength: 11,
    default: '1'
  },
  comment: {
    type: String,
    default: null
  },
  uid: {
    type: String,
    default: null
  }
});

// Create a unique index on the id field
youtubeSchema.index({ id: 1 }, { unique: true });

const Youtube = mongoose.models.Youtube || mongoose.model('Youtube',youtubeSchema);

export default Youtube;

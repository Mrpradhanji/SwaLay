const mongoose = require('mongoose');

const AnotationSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: 99999999999 // Maximum value for 11 digits
  },
  label: {
    type: String,
    required: true
  },
  earning: {
    type: String,
    required: true
  },
  period: {
    type: String,
    required: true
  },
  stamp: {
    type: Date,
    default: Date.now
  },
}); 

AnotationSchema.index({ id: 1 }, { unique: true }); // Create a unique index on the id field

const Anotation = mongoose.models.Anotation || mongoose.model('Anotation', AnotationSchema);

export default Anotation;

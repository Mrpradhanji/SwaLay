
import { kMaxLength } from "buffer";
import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  link: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  status: {
    type: String,
    default: '1',
    kMaxLength : 11,
  },
  comment: {
    type: String,
    default: null,
  },
  uid: {
    type: String,
    default: null,
  },
});

tableSchema.index({ id: 1 }, { unique: true });


const Pay = mongoose.models.Pay || mongoose.model("Pay",tableSchema);

export default Pay;
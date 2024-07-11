import mongoose from "mongoose";

const trackSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  released: {
    type: String,
    default: null,
  },
  song: {
    type: String,
    default: null,
  },
  composer: {
    type: String,
    default: null,
  },
  singer: {
    type: String,
    default: null,
  },
  lyrics: {
    type: String,
    default: null,
  },
  music: {
    type: String,
    default: null,
  },
  producer: {
    type: String,
    default: null,
  },
  isrc: {
    type: String,
    default: null,
  },
  duration: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  cid: {
    type: Number,
    default: null,
  },
  trackno: {
    type: String,
    default: null,
  },
  cut: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
  SpotifyLink: {
    type: String,
    default: null,
  },
  AppleLink: {
    type: String,
    default: null,
  },
  Instagram: {
    type: String,
    default: null,
  },
  Facebook: {
    type: String,
    default: null,
  },
  tags: {
    type: String,
    default: null,
  },
  cut3: {
    type: String,
    default: null,
  },
  platformLinks: {
    type: String,
    default: null,
  },
  otherSinger: {
    type: String,
    default: null,
  },
  otherLyricist: {
    type: String,
    default: null,
  },
  otherProducer: {
    type: String,
    default: null,
  },
  otherComposer: {
    type: String,
    default: null,
  },
  category: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  version: {
    type: String,
    default: null,
  },
  composerIPI: {
    type: String,
    default: null,
  },
  iprs: {
    type: Number,
    default: null,
  },
  role: {
    type: String,
    default: null,
  },
});
trackSchema.index({ id: 1 }, { unique: true });


const Track = mongoose.models.Track || mongoose.model("Track", trackSchema);

export default Track;

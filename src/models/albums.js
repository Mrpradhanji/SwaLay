const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  id: {
        type: Number,
        required: true,
        max : 99999999999,

    },
    title: { 
        type: String,
        default: null 
    },
    art: { 
        type: String, 
        default: null 
    },
    language: { 
        type: String,
        default: null 
    },
    genre: { 
        type: String, 
        default: null 
    },
    category: { 
        type: String, 
        default: null 
    },
    releasedate: { 
        type: String, 
        default: null 
    },
    label: { 
        type: String, 
        default: null 
    },
    mood: { 
        type: String, 
        default: null 
    },
    url: { 
        type: String, 
        required: true 
    },
    duration: { 
        type: String, 
        required:true,
    },
    status: { 
        type: Number, 
        default: 0,
        max :99999999999, 
    },
    tracks: { 
        type: Number, 
        default: 0,
        max :99999999999, 
    },
    rnote: { 
        type: String, 
        default: null 
    },
    crbt: { 
        type: Number, 
        default: 0 ,
        max :99999999999, 
    },
    thumb: { 
        type: String, 
        default: null 
    },
    upc: { 
        type: String, 
        default: null 
    },
    artist: { 
        type: String, 
        default: null 
    },
    producer: { 
        type: String, 
        default: null,
        required:true, 
    },
    cline: { 
        type: String, 
        default: null 
    },
    pline: { 
        type: String, 
        default: null 
    },
    inote: { 
        type: String, 
        default: null 
    },
    uid: { 
        type: Number, 
        default: 0 
    },
    comment: { 
        type: String, 
        default: null ,
        required:true,
    },
    date: { 
        type: Date, 
        default: Date.now,
        required:true, 
    }
});

albumSchema.index({ id: 1 }, { unique: true });

const Album = mongoose.models.Album || mongoose.model('Album', albumSchema);

export default Album;

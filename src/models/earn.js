import mongoose from "mongoose";

const EarnSchema = new mongoose.Schema({
       
    id: {
        type: Number,
        required: true,
        unique: true,
        max : 99999999999,
    },
    label: {
        type: String,
        default: null,
    },
    earning: {
        type: String,
        default: null,
    },
    period: {
        type: String,
        default: null,
    },
    stamp: {
        type: Date,
        default: Date.now,
    },
      

});

EarnSchema.index({ id: 1 }, { unique: true });

const Earn = mongoose.models.Earn || mongoose.model("Earn",EarnSchema);

export default Earn;
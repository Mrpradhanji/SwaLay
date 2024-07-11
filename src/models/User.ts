import mongoose, { Schema, Document } from "mongoose";


export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date | null;
    isVerified: boolean;
    isLable: boolean;
    lable: string;
    joinedAt: Date;
    subscriptionEndDate: Date;
}


const UserSchema: Schema<User> = new Schema({

    username: {
        type: String,
        required: [true, 'Username required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email required'],
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, "Please use a valid email address"]
    },
    password: {
        type: String,
        required: [true, 'Password required'],
        trim: true,
    },
    verifyCode: {
        type: String,
        default: undefined
    },
    verifyCodeExpiry: {
        type: Date || null,
        default: undefined
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isLable: {
        type: Boolean,
        default: false
    },
    lable: {
        type: String,
        default: null
    },
    joinedAt: {
        type: Date,
        default: Date.now
    },
    subscriptionEndDate: {
        type: Date,
        default: Date.now
    }



})


const User = (mongoose.models.Users as mongoose.Model<User>) || mongoose.model<User>("Users", UserSchema)


export default User


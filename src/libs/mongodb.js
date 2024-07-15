import mongoose from 'mongoose';

const connectMongoDB = async () => {
    if (mongoose.connection.readyState >= 1) {
        console.log("Already connected to database");
        return;
    }

    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Connection Successful");
    } catch (error) {
        console.log("Unable to connect to database");
        console.log(error);
    }
};

export default connectMongoDB;

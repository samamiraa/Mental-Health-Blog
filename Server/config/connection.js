import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mentalhealthblog');
        console.log('connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to mongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;
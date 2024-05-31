import mongoose from 'mongoose';

const { Schema } = mongoose;

const postsSchema = new Schema({
    title: {
        type: String,
    },
    date: {
        type: Date,
    },
    post: { 
        type: String, 
    }
});

const Posts = mongoose.model('Posts', postsSchema);

export default Posts;
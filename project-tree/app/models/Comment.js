import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    nodeId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Comment = mongoose.models.Comment || mongoose.model('Comment', CommentSchema);

export default Comment;

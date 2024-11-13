import Comment from '../models/Comment';
import connectToDatabase from "@/app/lib/mongodb";

export async function addComment(nodeId, text) {
    await connectToDatabase();
    const newComment = new Comment({ nodeId, text });
    return await newComment.save();
}

export async function getComments(nodeId) {
    await connectToDatabase();
    return Comment.find({nodeId});
}

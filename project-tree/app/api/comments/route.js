import { NextResponse } from 'next/server';
import connectToDatabase from '@/app/lib/mongodb';
import Comment from '@/app/models/Comment';

export async function GET(req) {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const nodeId = searchParams.get('nodeId');

    const comments = await Comment.find({ nodeId });
    return NextResponse.json({ comments });
}

export async function POST(req) {
    await connectToDatabase();

    const { nodeId, comment } = await req.json();
    const newComment = new Comment({ nodeId, text: comment });

    await newComment.save();
    return NextResponse.json({ comment: newComment });
}

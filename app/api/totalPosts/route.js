import { connectMongoDB } from "../../../lib/mongodb";

import Post from "../../../models/post";

export async function GET() {
  await connectMongoDB();
  const totalPosts = await Post.find();
  return NextResponse.json({ totalPosts });
}

export async function DELETE(req) {
  await connectMongoDB();
  const postId = req.nextUrl.searchParams.get("id");
  const post = await Post.findByIdAndDelete(postId);
  return NextResponse.json({ message: "User Deleted" }, post, {
    status: "deleted",
  });
}

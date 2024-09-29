import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import User from "../../../models/user";

export async function GET() {
  await connectMongoDB();
  const totalUsers = await User.find();
  return NextResponse.json({ totalUsers });
}

export async function DELETE(req) {
  await connectMongoDB();
  const userId = req.nextUrl.searchParams.get("id");
  const user = await User.findByIdAndDelete(userId);
  return NextResponse.json({ message: "User Deleted" }, user, {
    status: "deleted",
  });
}

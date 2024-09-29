import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newName: name,
    newEmail: email,
    newPassword: password,
  } = await req.json();
  const hasedPassword = await bcrypt.hash(password, 10);

  await connectMongoDB();
  const updatedUser = await User.findByIdAndUpdate(
    id,
    { name, email, hasedPassword },
    { new: true }
  );
  return NextResponse.json(
    { message: "User updated successfully" },
    updatedUser,
    { status: 200 }
  );
}

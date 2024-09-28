"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
function CreatePage() {
  const { data: session } = useSession();
  if (!session) redirect("/login");

  const userEmail = session?.user?.email;

  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  console.log(title, img, content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !img || !content) {
      alert("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, img, content, userEmail }),
      });

      if (res.ok) {
        router.push("/welcome");
      } else {
        throw new Error("Failed to create a post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex-grow">
        <div className="container mx-auto shadow-lg my-10 p-10 rounded-xl">
          <Link
            className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg  my-2"
            href="/welcome"
          >
            Go back
          </Link>
          <hr className="my-3" />
          <h3 className="text-xl">Create Post</h3>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post title"
            />

            <Input
              onChange={(e) => setImg(e.target.value)}
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Img url"
            />

            <Textarea
              onChange={(e) => setContent(e.target.value)}
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your post content"
            />
            <Button
              type="submit"
              name="create"
              className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full text-md my-2"
            >
              Create Post
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePage;

"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
function EditPage({ params }) {
  const { data: session } = useSession();
  if (!session) redirect("/login");
  const { id } = params;

  const [postData, setPostData] = useState("");

  //new data of post
  const [newTitle, setNewTitle] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newContent, setNewContent] = useState("");

  const router = useRouter();

  const getPostById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch post");
      }

      const data = await res.json();
      setPostData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostById(id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // update post data
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newTitle,
            newImg,
            newContent,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to update post");
      }

      router.refresh();
      router.push("/welcome");
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
          <h3 className="text-xl">แก้ไขโพส</h3>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={(e) => setNewTitle(e.target.value)}
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder={postData.post?.title}
              value={newTitle}
            />

            <Input
              onChange={(e) => setNewImg(e.target.value)}
              value={newImg}
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder={postData.post?.img}
            />

            <Textarea
              onChange={(e) => setNewContent(e.target.value)}
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              id=""
              cols="30"
              rows="10"
              placeholder={postData.post?.content}
              value={newContent}
            ></Textarea>

            <Button
              type="submit"
              name="update"
              className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full text-md my-2"
            >
              Update Post
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditPage;

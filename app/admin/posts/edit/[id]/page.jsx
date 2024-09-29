"use client";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function AdminEditPostPage({ params }) {
  const { id } = params; // Assuming id is the post ID
  const router = useRouter();

  const [oldPostData, setOldPostData] = useState([]);
  console.log(oldPostData);

  const [newTitle, setNewTitle] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newContent, setNewContent] = useState("");

  const getPostById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/totalPosts/${id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch post data.");
      }

      const data = await res.json();
      setOldPostData(data.post);
    } catch (error) {
      console.log(error);
    }
  };
  // Populate the form fields with the fetched data
  useEffect(() => {
    getPostById(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/totalPosts/${id}`,
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
        throw new Error("Failed to update post.");
      }
      router.refresh();
      router.push("/admin/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-grow">
      <div className="container mx-auto shadow-lg my-10 p-10 rounded-xl">
        <Link
          className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg  my-2"
          href="/admin/posts"
        >
          Go back
        </Link>
        <hr className="my-3" />
        <h3 className="text-xl">Admin Edit User Post</h3>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder={oldPostData?.title}
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />

          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder={oldPostData?.img}
            onChange={(e) => setNewImg(e.target.value)}
            value={newImg}
          />

          <Textarea
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            id=""
            cols="30"
            rows="10"
            placeholder={oldPostData?.content}
            onChange={(e) => setNewContent(e.target.value)}
            value={newContent}
          />
          <Button
            type="submit"
            name="create"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full text-md my-2"
          >
            Update Post
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AdminEditPostPage;

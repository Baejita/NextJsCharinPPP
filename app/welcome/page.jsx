"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import DeleteBtn from "./DeleteBtn";
function WelcomePage() {
  const { data: session } = useSession();
  if (!session) redirect("/login");

  if (session?.user.role === "admin") redirect("/admin");
  const [postData, setPostData] = useState([]);

  const userEmail = session?.user?.email;

  const getPost = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/posts?email=${userEmail}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await res.json();
      setPostData(data.posts);
    } catch (error) {
      console.log("Error loading post", error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10">
          <div className="flex justify-between">
            <div>
              <h3 className=" text-3xl">Welcome, {session?.user.name}</h3>
              <h4 className=" text-1xl">Email: {session?.user.email}</h4>
            </div>
            <div>
              <Link
                href="/create"
                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full text-md my-2"
              >
                Create Post
              </Link>
            </div>
          </div>
          {/* User Posts Data */}
          {postData && postData.length > 0 ? (
            postData.map((val) => (
              <div key={val._id} className="shadow-xl my-10 p-10 rounded-xl">
                <h4 className="text-2xl">{val.title}</h4>
                <Image
                  className="my-3 rounded-md"
                  src={val.img}
                  width={300}
                  height={0}
                  alt={val.title}
                />
                <p>{val.content}</p>
                <div className="mt-5">
                  <Link
                    className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg  "
                    href={`/edit/${val._id}`}
                  >
                    Edit
                  </Link>
                  <DeleteBtn id={val._id} />
                </div>
              </div>
            ))
          ) : (
            <p className="bg-slate-300 p-3 my-3 text-gray-500">
              You do not have any posts yet.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default WelcomePage;

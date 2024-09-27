"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
function WelcomePage() {
  const { data: session } = useSession();
  if (!session) redirect("/login");
  console.log(session);
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
          <div className="shadow-xl my-10 p-10 rounded-xl">
            <h4 className="text-2xl">Post Title</h4>
            <Image
              className="my-3 rounded-md"
              src="https://images.pexels.com/photos/28531965/pexels-photo-28531965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={300}
              height={0}
              alt="post image"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem tenetur ipsam dignissimos odio ratione vel molestiae.
              Qui commodi assumenda nam, accusamus eligendi iure.
            </p>
            <div className="mt-5">
              <Link
                className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg  "
                href="/edit"
              >
                Edit
              </Link>

              <Link
                className="bg-red-500 text-white border py-2 px-3 rounded-md text-lg  "
                href="/delete"
              >
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;

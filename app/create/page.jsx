import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import Link from "next/link";
import React from "react";

function CreatePage() {
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
          <form>
            <Input
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post title"
            />

            <Input
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Img url"
            />

            <Textarea
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

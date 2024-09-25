import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";

function EditPage() {
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
          <form>
            <Input
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post title"
              value="Title befor update"
            />

            <Input
              type="text"
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              placeholder="Post Img url"
              value="https://imagurl.com/img"
            />

            <Textarea
              className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
              id=""
              cols="30"
              rows="10"
              placeholder="Content befor update"
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

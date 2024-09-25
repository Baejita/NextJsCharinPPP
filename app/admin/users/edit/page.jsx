import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import React from "react";
function EditUserPage() {
  return (
    <div className="flex-grow">
      <div className="container mx-auto shadow-lg my-10 p-10 rounded-xl">
        <Link
          className="bg-gray-500 text-white border py-2 px-3 rounded-md text-lg  my-2"
          href="/admin/users"
        >
          Go back
        </Link>
        <hr className="my-3" />
        <h3 className="text-xl">Admin Edit User Page</h3>
        <form>
          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder="Username"
          />

          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder="Email"
          />

          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder="Password"
          />

          <Button
            type="submit"
            name="update"
            className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full text-md my-2"
          >
            Update User
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditUserPage;

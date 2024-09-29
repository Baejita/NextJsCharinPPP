"use client";

import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
function EditUserPage({ params }) {
  const router = useRouter();

  const { id } = params;
  const [userOlddata, setUserOlddata] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const getUserById = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URI}/api/totalusers/${id}`,
        {
          method: "GET",
          cache: "no-store",
        }
      );

      if (!res.ok) {
        throw new Error("Failed to fetch user");
      }

      const data = await res.json();
      setUserOlddata(data);
    } catch (error) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserById(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URI}/api/totalusers/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newName, newEmail, newPassword }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update user");
      }

      router.refresh();
      router.push("/admin/users");
    } catch (error) {
      console.log(error);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-black my-2"
            placeholder={userOlddata?.user?.name}
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          />

          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder={userOlddata?.user?.email}
            onChange={(e) => setNewEmail(e.target.value)}
            value={newEmail}
          />

          <Input
            type="text"
            className="w-[300px] block bg-gray-200 border py-2 px-3 rounded text-lg my-2"
            placeholder={userOlddata?.user?.password}
            onChange={(e) => setNewPassword(e.target.value)}
            value={newPassword}
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

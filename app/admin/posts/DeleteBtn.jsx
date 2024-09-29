"use client";
import { Button } from "@nextui-org/button";
import React from "react";

function DeleteBtn({ id }) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete");

    if (confirmed) {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URI}/api/totalPosts?id=${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        window.location.reload();
      }
    }
  };
  return (
    <Button
      onClick={handleDelete}
      className="bg-red-500 text-white border py-2 px-3 mx-2 rounded-md text-lg  "
    >
      Delete
    </Button>
  );
}

export default DeleteBtn;

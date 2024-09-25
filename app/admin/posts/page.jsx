"use client";
import React from "react";
import SideNav from "../components/SideNav";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import { Link } from "@nextui-org/link";
import Image from "next/image";
function page() {
  return (
    <>
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex mt-10">
            <SideNav />
            <div className="p-10">
              <h3 className="text-3xl mb-3">Manage Posts</h3>
              <p>A list of posts retrived from a MongoDB database</p>

              <div className="shadow-lg overflow-x-auto">
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>Post ID</TableColumn>
                    <TableColumn>Post Title</TableColumn>
                    <TableColumn>Post Image</TableColumn>
                    <TableColumn>Post Content</TableColumn>
                    <TableColumn>Actions</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>1</TableCell>
                      <TableCell>This is post title</TableCell>
                      <TableCell>
                        <Image
                          className="my-3 rounded-md"
                          src="https://images.pexels.com/photos/28578425/pexels-photo-28578425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          width={100}
                          height={0}
                          alt="post image"
                        />
                      </TableCell>

                      <TableCell>This is Post content</TableCell>
                      <TableCell>
                        <Link
                          className="secondary  border py-1 px-2 rounded-lg"
                          href="/admin/posts/edit"
                        >
                          Edit
                        </Link>

                        <Link
                          className="text-white bg-red-800  border py-1 px-2 rounded-lg my-2 mx-2"
                          href="/admin/posts/delete"
                        >
                          Delete
                        </Link>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;

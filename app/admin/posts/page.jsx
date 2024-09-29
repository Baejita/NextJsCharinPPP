"use client";
import React, { useState, useEffect } from "react";
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
import DeleteBtn from "./DeleteBtn";
function AdminPost() {
  const [allPostsData, setAllPostsData] = useState([]);

  console.log(allPostsData);
  const getAllPostsData = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/api/totalPosts`, {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setAllPostsData(data.totalPosts);
    } catch (error) {
      console.log("Error loading poast", error);
    }
  };

  useEffect(() => {
    getAllPostsData();
  }, []);

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
                    {allPostsData.map((val) => (
                      <TableRow key={val._id}>
                        <TableCell>{val._id}</TableCell>
                        <TableCell>{val.title}</TableCell>
                        <TableCell>
                          <Image
                            className="my-3 rounded-md"
                            src={val.img}
                            width={100}
                            height={0}
                            alt={val.title}
                          />
                        </TableCell>

                        <TableCell>{val.content}</TableCell>
                        <TableCell>
                          <Link
                            className="secondary  border py-1 px-2 rounded-lg"
                            href={`/admin/posts/edit/${val._id}`}
                          >
                            Edit
                          </Link>

                          <DeleteBtn id={val._id} />
                        </TableCell>
                      </TableRow>
                    ))}
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

export default AdminPost;

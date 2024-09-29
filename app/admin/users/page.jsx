"use client";
import React, { useEffect, useState } from "react";
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
import DeleteBtn from "./deleteBtn";

function AdminPageEditUser() {
  const [allUsersData, setAllUsersData] = useState([]);

  const getAllUsersData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/totalusers");

      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await res.json();
      setAllUsersData(data.totalUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <>
      <div className="flex-grow">
        <div className="container mx-auto">
          <div className="flex mt-10">
            <SideNav />
            <div className="p-10">
              <h3 className="text-3xl mb-3">Manage User</h3>
              <p>A list of user retrived from a MongoDB database</p>

              <div className="shadow-lg overflow-x-auto">
                <Table aria-label="Example static collection table">
                  <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Username</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Actions</TableColumn>
                    <TableColumn></TableColumn>
                  </TableHeader>
                  <TableBody>
                    {allUsersData?.map((val) => (
                      <TableRow key={val._id}>
                        <TableCell>{val._id}</TableCell>
                        <TableCell>{val.name}</TableCell>
                        <TableCell>{val.email}</TableCell>
                        <TableCell>{val.role}</TableCell>
                        <TableCell>
                          <Link
                            className="secondary  border py-1 px-2 rounded-lg"
                            href={`/admin/users/edit/${val._id}`}
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

export default AdminPageEditUser;

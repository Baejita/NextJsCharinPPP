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
function page() {
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
                    <TableColumn>Password</TableColumn>
                    <TableColumn>Actions</TableColumn>
                  </TableHeader>
                  <TableBody>
                    <TableRow key="1">
                      <TableCell>1</TableCell>
                      <TableCell>people</TableCell>
                      <TableCell>people@example.com</TableCell>
                      <TableCell>123456</TableCell>
                      <TableCell>
                        <Link
                          className="secondary  border py-1 px-2 rounded-lg"
                          href="/admin/users/edit"
                        >
                          Edit
                        </Link>

                        <Link
                          className="text-white bg-red-800  border py-1 px-2 rounded-lg my-2 mx-2"
                          href="/admin/users/delete"
                        >
                          Delete
                        </Link>
                      </TableCell>
                    </TableRow>
                    <TableRow key="2">
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Zoey Lang</TableCell>
                      <TableCell>Technical Lead</TableCell>
                      <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Jane Fisher</TableCell>
                      <TableCell>Senior Developer</TableCell>
                      <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>William Howard</TableCell>
                      <TableCell>Community Manager</TableCell>
                      <TableCell>Vacation</TableCell>
                    </TableRow>
                    <TableRow key="5">
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>Tony Reichert</TableCell>
                      <TableCell>CEO</TableCell>
                      <TableCell>Active</TableCell>
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

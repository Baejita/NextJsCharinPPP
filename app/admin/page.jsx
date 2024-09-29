"use client";
import React, { useState, useEffect } from "react";
import SideNav from "./components/SideNav";
import Content from "./components/Content";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
function AdminPage() {
  const { data: session } = useSession();
  if (!session) redirect("/login");
  if (!session?.user?.role === "admin") redirect("/welcome");

  const [totalUserData, setTotalUserData] = useState([]);

  const getTotalUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/totalusers", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch total users");
      }
      const data = await res.json();
      setTotalUserData(data.totalUsers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalUsers();
  }, []);

  const [totalPostData, setTotalPostData] = useState([]);

  const getTotalPosts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/totalusers", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch total Post");
      }
      const data = await res.json();
      setTotalPostData(data.totalPosts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTotalPosts();
  }, []);

  return (
    <div className="flex-grow">
      <div className="container mx-auto">
        <div className="flex justify-between mt-10">
          <SideNav />
          <Content
            totalUserData={totalUserData}
            totalPostData={totalPostData}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React, { useState } from "react";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!name || !password || !email || !confirmPassword) {
      setError("ขออภัย กรุณากรอกให้ครบทุกช่อง.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        setError("");
        form.reset();
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration:", error);
    }
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[400px] shadow-xl p-10 mt-5 rounded-xl">
          <h3 className="text-3xl">Register</h3>
          <hr className="my-3" />
          <form onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}

            <Input
              isRequired
              type="text"
              label="Username"
              placeholder="ประชาชน"
              className="max-w-xs py-3"
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              isRequired
              type="text"
              label="Email"
              placeholder="example@example.com"
              className="max-w-xs py-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="xxxxxxx"
              className="max-w-xs py-3"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              isRequired
              type="password"
              label="Confirm Password"
              placeholder="xxxxxxx"
              className="max-w-xs py-3"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <Button type="submit" color="primary" className=" text-white">
              ลงทะเบียน
            </Button>
            <hr className="my-3" />
            <p>
              {" "}
              มีบัญชีแล้วหรือไม่ ?{" "}
              <Link href="/login" className="text-orange-500 hover:underline">
                ลงชื่อเข้าใช้
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

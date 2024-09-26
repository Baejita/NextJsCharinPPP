"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("welcome");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[400px] shadow-xl p-10 mt-5 rounded-xl">
          <h3 className="text-3xl">Login</h3>
          <hr className="my-3" />
          <form onSubmit={handleSubmit}>
            {error && <div className="text-red-500">{error}</div>}

            <Input
              isRequired
              type="text"
              label="Username"
              placeholder="Enter your email"
              className="max-w-xs py-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="คนเท่ากัน"
              className="max-w-xs py-3"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button color="primary" className=" text-white" type="submit">
              Sign In
            </Button>
            <hr className="my-3" />
            <p>
              {" "}
              คุณยังไม่มีบัญชีใช่หรือไม่ ? ไปที่หน้า{" "}
              <Link href="/register" className="text-blue-700 hover:underline">
                ลงทะเบียน
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React from "react";

function RegisterPage() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[400px] shadow-xl p-10 mt-5 rounded-xl">
          <h3 className="text-3xl">Register</h3>
          <hr className="my-3" />
          <form action="">
            <Input
              isRequired
              type="username"
              label="Username"
              placeholder="ประชาชน"
              className="max-w-xs py-3"
            />

            <Input
              isRequired
              type="email"
              label="Email"
              placeholder="example@example.com"
              className="max-w-xs py-3"
            />
            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="xxxxxxx"
              className="max-w-xs py-3"
            />
            <Input
              isRequired
              type="password"
              label="Confirm Password"
              placeholder="xxxxxxx"
              className="max-w-xs py-3"
            />

            <Button color="primary" className=" text-white">
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

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React from "react";

function LoginPage() {
  return (
    <div className="flex-grow">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[400px] shadow-xl p-10 mt-5 rounded-xl">
          <h3 className="text-3xl">Login</h3>
          <hr className="my-3" />
          <form action="">
            <Input
              isRequired
              type="username"
              label="Username"
              placeholder="คุณประชาชน"
              className="max-w-xs py-3"
            />

            <Input
              isRequired
              type="password"
              label="Password"
              placeholder="คนเท่ากัน"
              className="max-w-xs py-3"
            />

            <Button color="primary" className=" text-white">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

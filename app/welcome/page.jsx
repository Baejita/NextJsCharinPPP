import Image from "next/image";
import Link from "next/link";
import React from "react";

function WelcomePage() {
  return (
    <>
      <div className="flex-grow">
        <div className="container mx-auto shadow-xl my-10 p-10">
          <div className="flex justify-between">
            <div>
              <h3 className=" text-3xl">Welcome, ประชาชน</h3>
            </div>
            <div>
              <Link
                href="/create"
                className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded-full text-md my-2"
              >
                Create Post
              </Link>
            </div>
          </div>
          {/* User Posts Data */}
          <div className="shadow-xl my-10 p-10 rounded-xl">
            <h4 className="text-2xl">Post Title</h4>
            <Image
              className="my-3 rounded-md"
              src="https://unsplash.com/photos/software-engineer-typing-source-code-on-computer-keyboard-while-colleagues-sit-down-at-desk-for-group-project-app-developer-working-in-it-startup-company-doing-online-cloud-computing-3vEtYOjWwC4"
              width={300}
              height={300}
              alt="post image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;

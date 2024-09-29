import React from "react";
import { FaRegCircleUser, FaRegNewspaper } from "react-icons/fa6";
function Content({ totalUserData }) {
  return (
    <div className="px-10 rounded-lg ">
      <div className="flex">
        <div className=" shadow-lg w-[300px] m-3 p-10 rounded-lg">
          <h3 className="flex items-center">
            <FaRegCircleUser className="mr-2 text-lg" size={29} />
            Total Users
          </h3>

          <p className="text-5xl mt-10">{totalUserData?.length}</p>
        </div>

        <div className=" shadow-lg w-[300px] m-3 p-10 rounded-lg">
          <h3 className="flex items-center">
            <FaRegNewspaper className="mr-2 text-lg" size={29} />
            Total Posts
          </h3>

          <p className="text-5xl mt-10">59</p>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maxime
        voluptatibus debitis ipsa in fuga illum, officiis corporis repellendus
        natus adipisci, error quidem similique soluta veritatis atque ex magni.
        Dolore.
      </p>
    </div>
  );
}

export default Content;

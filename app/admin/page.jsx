import React from "react";
import SideNav from "./components/SideNav";
import Content from "./components/Content";

function AdminPage() {
  return (
    <div className="flex-grow">
      <div className="container mx-auto">
        <div className="flex justify-between mt-10">
          <SideNav />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

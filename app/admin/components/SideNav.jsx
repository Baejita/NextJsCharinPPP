import { Link, LinkIcon } from "@nextui-org/link";
import React from "react";

function SideNav() {
  return (
    <nav className="shadow-lg p-10 rounded-lg">
      <ul>
        <li>
          <Link href="/admin" className="block my-3 p-3 rounded-lg">
            Dashboard
          </Link>

          <Link href="/admin/users" className="block my-3 p-3 rounded-lg">
            Users
          </Link>

          <Link href="/admin/posts" className="block my-3 p-3 rounded-lg">
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default SideNav;

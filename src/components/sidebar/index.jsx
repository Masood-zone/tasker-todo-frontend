import React from "react";
import { taskLinks } from "./data";
import { Menu, UserRoundCheck } from "lucide-react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <nav className="drawer lg:drawer-open bg-background-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center absolute">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost btn-primary-500 drawer-button lg:hidden top-0 left-0"
        >
          <Menu size="32" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li className="mb-5">
            <div className="flex items-center justify-start">
              <UserRoundCheck className="w-8 h-8 rounded-full avatar" />
              <div className="ml-2">
                <p className="text-lg font-medium">Tasker</p>
                <p className="text-xs text-gray-500">tasker@email.com</p>
              </div>
            </div>
          </li>
          {taskLinks.map((link) => (
            <li
              key={link.title}
              className="flex w-full items-start justify-center my-1"
            >
              <div className="flex w-full items-center justify-start">
                <img src={link.icon} alt="link-icon" />
                <Link to={link.path}>{link.title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SideBar;

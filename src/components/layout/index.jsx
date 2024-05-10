import React from "react";
import SideBar from "../sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const view = useSelector((state) => state.tasks.view);
  return (
    <main className="flex items-start w-screen h-screen overflow-hidden">
      <div>
        <SideBar />
      </div>
      <div className="w-full h-full bg-image rounded-tl-3xl rounded-bl-3xl p-6 max-lg:rounded-none max-lg:pt-10">
        <Outlet />
      </div>
      {view && <div className="w-[40%] h-full bg-white"></div>}
    </main>
  );
}

export default Layout;

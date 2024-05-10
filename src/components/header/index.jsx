import React from "react";
import moment from "moment";
import { Ellipsis } from "lucide-react";

function Header({ title, onHandleClick }) {
  const currentDate = moment().format("dddd, MMMM D");

  return (
    <header className="flex items-start justify-between">
      <div className="flex flex-col">
        <h1 className="text-3xl py-2 font-medium">{title}</h1>
        <p className="text-sm">{currentDate}</p>
      </div>
      <div>
        <button onClick={onHandleClick} className="btn btn-ghost w-16">
          <Ellipsis size="35" />
        </button>
      </div>
    </header>
  );
}

export default Header;

import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleView } from "../../redux/task.slice";
import Header from "../../components/header";
import { Circle, PlusCircle } from "lucide-react";

function Home() {
  const dispatch = useDispatch();
  const [isInputClicked, setIsInputClicked] = useState(false);
  const inputRef = useRef(null);
  const handleToggleView = () => {
    dispatch(toggleView());
  };

  const handleClick = () => {
    setIsInputClicked(true);
  };

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsInputClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="h-full px-4 py-2 flex flex-col">
      <Header title="Home" onHandleClick={handleToggleView} />
      {/* Task List */}
      <div className="flex-1 mt-5"></div>
      {/* Add task */}
      <div className=" text-text-800 bg-accent-100 rounded-lg overflow-hidden">
        {isInputClicked ? (
          <div className="flex items-center h-11 px-2">
            <Circle size={24} />
            <input
              type="text"
              className="input w-full h-full bg-transparent text-text-800 active:text-text-800 focus:text-text-800 placeholder-text-800 active:placeholder-text-800 focus:placeholder-text-800 active:border-none focus:border-none outline-none active:outline-none focus:outline-none"
              placeholder="Try typing 'Buy groceries on Sunday 10am'"
            />
          </div>
        ) : (
          <div
            className="flex items-center gap-3 h-11 px-2 bg-accent-200 hover:bg-accent-100"
            onClick={handleClick}
          >
            <PlusCircle size={24} />
            <span>Add a task</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;

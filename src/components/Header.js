import React, { useState } from "react";
import Notes from '../images/notes.png';
import Tick from '../images/double-tick.png';
import Plus from '../images/plus.png';
import { useDispatch } from "react-redux";
import { added, allcompleted, clearcompleted } from "../redux/todo/actions";

export default function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleGetInput = e => {
    setInput(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(added(input));
    setInput('')
  }
  const completeHandler = () => {
    dispatch(allcompleted())
  }
  const clearHandler = () => {
    dispatch(clearcompleted())
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
        <img src={Notes} className="w-6 h-6" alt="Add todo" />
        <input
          value={input}
          onChange ={handleGetInput}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url(${Plus})] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={completeHandler} className="flex space-x-1 cursor-pointer">
          <img
            className="w-4 h-4"
            src={Tick}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li  onClick={clearHandler}  className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}

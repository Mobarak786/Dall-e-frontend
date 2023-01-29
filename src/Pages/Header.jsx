import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/react.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="w[90%] m-auto min-h[100px] p-5 flex justify-between">
      <div className="flex justify-between ">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-10 h-10 " />
        </Link>
        <h2 className="text-xl mt-2 ml-2 font-inter font-bold">AIart</h2>
      </div>
      <button
        className="w-[100px] h-[20px] p-5 bg-green-500
      text-white font-bold rounded-md flex justify-center items-center hover:bg-green-400"
        onClick={() => {
          navigate("/create-post");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default Header;

import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const handleClick = (target) => {
    navigate(`/${target}`);
  };

  return (
    <div className="border-none text-lime-500 font-bold text-2xl py-2">
      {/* <div className="bg-gradient-to-r from-purple-400 to-pink-600 text-slate-50 font-bold w-full py-2"> */}
      <ul className="flex flex-row justify-between items-center text-center w-full gap-5  px-5">
        <li
          onClick={() => handleClick("aboutUs")}
          className="cursor-pointer px-5 rounded-md w-[min(150px,30%)] flex justify-center items-center flex-col hover:-rotate-3 hover:scale-[1.1] ease-in-out duration-150 hover:text-lime-900"
        >
          Conócenos
        </li>
        <li
          onClick={() => handleClick("")}
          className="cursor-pointer px-5 rounded-md w-[min(150px,30%)] flex justify-center items-center flex-col hover:scale-[1.2] ease-in-out duration-150 hover:text-lime-900"
        >
          Inicio
        </li>
        <li
          onClick={() => handleClick("contacts")}
          className="cursor-pointer px-5 rounded-md w-[min(150px,30%)] flex justify-center items-center flex-col hover:rotate-3 hover:scale-[1.1] ease-in-out duration-150 hover:text-lime-900"
        >
          Contáctanos
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";


function Header() {

  return (
    <nav className="relative lg:flex justify-center items-center" >
      <div className=" w-[100vw] lg:w-[55vw]   flex flex-row justify-between lg:justify-between items-center fixed  lg:fixed lg:top-10  lg:shadow-3xl bg-black text-white  py-2 px-10  lg:rounded-full z-50  ">
        <NavLink to="/">
         <h2 className="text-xl"><strong className="text-2xl">X</strong>penses</h2>
        </NavLink>
        <NavLink to='/signup'>
          Sign Up
        </NavLink>
    </div>
    </nav>
  );
}

export default Header;

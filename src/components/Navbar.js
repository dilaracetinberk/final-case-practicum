import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { SiFastapi } from "react-icons/si";

function Navbar() {
  return (
    <div className="navbar  top-0 flex justify-between items-center bg-slate-950 mb-5 shadow-md shadow-yellow-400">
      <Link to="/">
        <img className="w-20 ml-5" src={logo} alt="Logo Star Wars" />
      </Link>
      <nav className="flex flex-row items-center mr-5">
        <SiFastapi className="text-yellow-400" />
        <Link to="https://swapi.dev/">
          <h3 className="text-white font-extrabold px-2">SWAPI</h3>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;

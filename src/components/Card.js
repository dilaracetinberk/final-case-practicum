import React from "react";

import { Link } from "react-router-dom";

import starships from "../assets/starship.jpg";

function Card({ name, model, rate, starship}) {
  
  return (
    <Link  to={`/starship/`} >
    <div className="card max-w-sm m-5 flex flex-col bg-gray-900 p-2 rounded-2xl shadow-lg shadow-cyan-500/50  hover:shadow-2xl hover:shadow-cyan-500/50">
      <div className="card-img">
        <img className="rounded-2xl" src={starships} alt="starship-img " />
      </div>
      <div className="px-4 py-3">
      <div className="card-name text-slate-50 text-center text-2xl">
        {name}
      </div>
      <div className="card-model text-slate-50 text-lg ">
       <span className="font-bold">Model: </span> {model}
      </div>
      <div className="card-rate text-slate-50 text-lg">
        <span className="font-bold">Hyperdrive Rating: </span> {rate}
      </div>
      </div>
    </div>
    </Link>
  );
}

export default Card;

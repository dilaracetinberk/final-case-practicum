import React from 'react';
import { Link } from "react-router-dom";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center mt-20 text-slate-300 py-5'>
      <p>Created using <Link to="https://swapi.dev/" className='underline'> SWAPI </Link> data by Dilara Cetinberk</p>
      <ul className='social-list flex flex-row text-cyan-500  gap-5 py-5'>
        
        <li className='social-list-item origin-center hover:rotate-45 hover:text-yellow-400'>
          <Link to='https://www.linkedin.com/in/dilaracetinberk/' className='social-list-link'>
          
          <FaLinkedin size={50}/>
         </Link>
         </li>
         <li className='social-list-item origin-center hover:rotate-45 hover:text-yellow-400'>
          <Link to='https://github.com/dilaracetinberk' className='social-list-link'>
          <GoMarkGithub size={50}/>
         </Link>
        </li>
        <li className='social-list-item origin-center hover:rotate-45 hover:text-yellow-400'>
        <a href="mailto:dilaracetinberk@gmail.com" className='social-list-link'>
          <GoMail size={50}/>
         </a>
        </li>
      
    </ul>
    </footer>
  )
}

export default Footer
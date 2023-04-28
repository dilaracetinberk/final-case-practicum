import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bg from '../assets/bg.png'

function NotFound() {

  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }); 


  return (
    <div className="not-found flex flex-col justify-center items-center mt-20 text-slate-300">
        <h1 className="font-extrabold text-4xl md:text-6xl mt-10 text-center">PAGE NOT FOUND</h1>
        <p className="mt-5 text-lg md:text-xl text-left md:text-center">Sorry, the page you are looking for doesn&apos;t exist.</p>
        <p className="text-lg md:text-xl text-left md:text-center">Don&apos;t worry, you will be directed to the home page in 5 seconds.</p>
        <img className="w-full md:w-1/2" src={bg} alt='404'/>
        </div>
  )
}

export default NotFound
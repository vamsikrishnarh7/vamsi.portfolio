import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="center-div w-[90%] m-auto flex flex-col items-center">
      <h1 className="text-3xl lg:text-[40px] font-bold uppercase font-[studiofeixen]">
        Hey, I'M <span className="text-[#a8b0ce]">Durga Vamsi Krishna</span>
      </h1>
      <p className="text-lg text-white mb-[50px]">
        I am a front-end web developer
      </p>
      <div className=" flex flex-col lg:flex-row lg:gap-10 text-white lg:text-xl">
        <Link to="/projects">
          <button className="relative btn flex gap-1 items-center mb-5 lg:mb-0">
            <FaArrowRight size={20} />
            see my projects
          </button>
        </Link>
        <Link to="/about">
          <button className="relative btn flex gap-1 items-center">
            <FaArrowRight size={20} />
            more about me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

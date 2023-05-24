import React from "react";
import {FaArrowDown} from 'react-icons/fa'
const About = () => {
  return (
    <div className="px-5 mt-5 lg:mt-0 text-white">
      <img className="rounded-xl mb-5 lg:fixed lg:right-[-15px] lg:top-[-10px] lg:w-[300px]" src="../vamsi.jpeg" />
      <h1 className="underline text-3xl">About</h1>
      <p className="mb-5">
        Hey, my name is Durga Vamsi Krishna Pullapanthula, a third year student
        studying Computer Science at Sri Venkateswara Engineering College,
        Tirupati. I'm a front-end web developer and learning back-end web
        development
      </p>
      <a className="pointer" href="../../resume.pdf" download="resume">
        <button className="flex items-center gap-1 border p-1 rounded-md"><FaArrowDown />resume</button>
      </a>
    </div>
  );
};

export default About;

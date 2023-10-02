import React from "react";
import quotes from "../secondpic.jpg";
const Second = () => {
  return (
    <div className="flex bg-slate-100 justify-evenly scroll-smooth">
      <div className="left mt-24 rounded hidden md:block">
        <img
          src={quotes}
          alt="quotes"
          height={300}
          width={300}
          data-aos="fade-up"
          className="m-10 rounded-md z-10"
        />
        <div className="h-48 w-52 bg-redd z-20 -mt-32"></div>
      </div>
      <div className="middle my-24">
        <h3 className="capitalize text-redd font-bold m-5">About me</h3>
        <h1 className="capitalize text-5xl font-bold mx-5">
          I'm <span className="text-redd">Mukilan</span>
        </h1>
        <h1 className="capitalize text-4xl font-bold mx-5">
          Web<span className="text-redd"> Designer</span>
        </h1>
        <h3 className="capitalize font-bold text-2xl m-5">
          From India , Tamilnadu
        </h3>
        <p className="text-gray-500 font-sans m-5 md:max-w-md">
          I am Mukilan T, a BE Computer Science student at Karpagam Academy of
          Higher Education. I have a good knowledge of front-end development and
          am currently learning and building projects in artificial
          intelligence. I have been appointed as the Technical Head of the Geeks
          for Geeks Student Chapter.
        </p>
        <button className="cursor:pointer capitalize font-bold px-7 m-5 py-3 text-white bg-redd rounded">
          Download CV
        </button>
      </div>

    </div>
  );
};
export default Second;

import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillLinkedin, AiFillSetting } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isFrontendDeveloper, setIsFrontendDeveloper] = useState(true);

  const toggleText = () => setIsFrontendDeveloper((prevState) => !prevState);
  const [showSettings, setShowSettings] = useState(true);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };
  useEffect(() => {
    const textToType = isFrontendDeveloper
      ? "Frontend Developer"
      : "Web Designer";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.slice(0, currentIndex) + "|");
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(toggleText, 3000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isFrontendDeveloper]);
  const changeReddColor = (color) => {
    document.documentElement.style.setProperty("--redd-color", color);
  };
  return (
    <div className="flex my-4 scroll-smooth">
      <div className="icons hidden md:block justify-center my-36 ml-10">
        <FaFacebookF color="white" size={20} className="my-5" />
        <a href="https://www.linkedin.com/in/mukilant/">
          {" "}
          <AiFillLinkedin color="white" size={20} className="my-5" />
        </a>
        <a href="https://www.linkedin.com/in/mukilant/">
          {" "}
          <BsInstagram size={20} color="white" className="my-5" />
        </a>
      </div>

      <div className="text-white font-josefin capitalize justify-center items-center md:px-40 px-10 py-20">
        <h3 className="font-bold">Hello , I'm</h3>
        <h1 className="text-7xl py-2 font-josefin font-extrabold text-redd">
          Mukilan
        </h1>
        <h3 className="font-bold text-2xl py-4 my-2">{typedText}</h3>
        <button className="px-10 font-bold capitalize py-3 rounded-lg flex-row bg-redd">
          Say hello
        </button>
        <button className="px-2 py-2 font-bold mx-6 capitalize cursor:pointer">
          about me
        </button>
        <div className="mt-52 ">
          <p>mukilan2808@gmail.com</p>
        </div>
      </div>

      <div className="fixed top-40 right-0 md:-ml-8 flex justify-end">
        <AiFillSetting
          size={30}
          color="white"
          onClick={toggleSettings}
          className="animate-spin mt-2 drop-shadow-lg"
        />
        <div
          className={`w-auto p-3 h-fit rounded shadow-2xl hover:shadow-sm transition-all duration-500 ${
            showSettings ? "-mr-40" : ""
          }`}
        >
          {" "}
          <div className="flex justify-evenly flex-wrap">
            <button
              className="rounded-full m-1 w-10 h-10 bg-orange-600 hover:scale-125 transition-all duration-400"
              onClick={() => changeReddColor("#ea4343")}
            ></button>
            <button
              className="rounded-full m-1 w-10 h-10 bg-cyan-400 hover:scale-125 transition-all duration-400"
              onClick={() => changeReddColor("#00bcd4")}
            ></button>
            <button
              className="rounded-full m-1 w-10 h-10 bg-red-600 hover:scale-125 transition-all duration-400"
              onClick={() => changeReddColor("#ff0000")}
            ></button>
          </div>
          <div className="flex justify-around">
            <button
              className="rounded-full m-1 w-10 h-10 bg-amber-500 hover:scale-125 transition-all duration-400"
              onClick={() => changeReddColor("#ffc107")}
            ></button>
            <button
              className="rounded-full m-1 w-10 h-10 bg-green-600 hover:scale-125 transition-all duration-400"
              onClick={() => changeReddColor("#4caf50")}
            ></button>
            <button
              className="rounded-full m-1 w-10 h-10 bg-indigo-500 hover:scale-125 transition-all duration-400"
              onClick={() => changeReddColor("#3f51b5")}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

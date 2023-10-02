import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faBootstrap,
  faPython,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiAndroidstudio, SiPycharm } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
const Third = () => {
  return (
    <div className="flex-col bg-redd">
      <div className="left text-white flex-col">
        <h3 className="text-3xl font-bold flex py-10 justify-center">
          My skills
        </h3>
        <div className="flex justify-center flex-wrap">
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "#e01b24" }}
              size="4x"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ color: "#1c71d8" }}
              size="4x"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <FontAwesomeIcon
              icon={faBootstrap}
              style={{ color: "#813d9c" }}
              size="4x"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <BiLogoTailwindCss size={40} color="#1c71d8" />
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <FontAwesomeIcon
              icon={faSquareJs}
              style={{ color: "#f5c211" }}
              size="4x"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#61dafb " }}
              size="4x"
            />
          </div>
          <div className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform hover:scale-110 hover:shadow-md">
            <FontAwesomeIcon
              icon={faPython}
              style={{ color: "#1c71d8" }}
              size="4x"
            />
          </div>
        </div>
      </div>
      <h2 className="flex justify-center text-2xl font-semibold text-white">
        Tools
      </h2>
      <div className="flex justify-center items-center flex-wrap">
        <FontAwesomeIcon
          icon={faGithub}
          style={{ color: "#000000" }}
          size="4x"
          className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-md"
        />
        <TbBrandVscode
          size={40}
          color="#007acc"
          className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-md"
        />
        <SiAndroidstudio
          size={40}
          color="#3ddc84"
          className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-md"
        />
        <SiPycharm
          // size={30}
          color="#143c7a"
          className="flex items-center justify-center w-24 h-24 p-2 m-2 bg-slate-200 border rounded-lg shadow-md transition-transform transform hover:scale-110 hover:shadow-md"
        />
      </div>
    </div>
  );
};
export default Third;
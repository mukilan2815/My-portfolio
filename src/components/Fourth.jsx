import React from "react";
import Cardprojects from "./Cardprojects";
import pest from "../electronics-10-00372-g003.png";
import llm from "../7iyrq1z5.Inside_ChatGPT_pic1.png";
const Fourth = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-black font-bold flex justify-center text-2xl pt-10">
        My Projects
      </h1>
      <div className="flex flex-wrap px-8 py-8">
        <Cardprojects
          title="Pest Detection "
          description="Pest is the common problem for farmers. we have made a easy interface pest detection for farmers.
          ~At NGP college hackathon 2023"
          imageSrc={pest}
          readMoreHref="https://github.com/mukilan2815/Pest-detection"
        />
        <Cardprojects
          title="Large Language Model Offline"
          description="We have made a Large language model that can work offline. It can summarize text, news, document , check grammar mistake and reformat it.~Smart india hackathon 2023"
          imageSrc={llm}
          readMoreHref="#"
        />
      </div>
    </div>
  );
};

export default Fourth;

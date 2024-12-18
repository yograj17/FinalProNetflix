import React from "react";
import { optionData } from "../../utils/optionData";

const Options = () => {
  return (
    <div className=" bg-black text-white py-6 mx-6 flex flex-col gap-4">
      <div className=" font-semibold text-xl">More reasons to join</div>
      <div className=" flex flex-col  gap-4">
        {optionData.map((key, index) => (
          <div
            className=" p-4 h-48 rounded-xl relative bg-gradient-to-br from-blue-500/40 via-pink-500/30 to-purple-500/20"
            key={index}
          >
            <div className="text-xl font-semibold">{key.heading}</div>
            <div className="mt-2">{key.info}</div>
            <div className="h-10 absolute bottom-3 right-10">{key.logo}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;

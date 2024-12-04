import React from "react";
import { optionData } from "../../utils/optionData";

const Options = () => {
  return (
    <div className="bg-black text-white py-7 px-32 flex flex-col gap-6">
      <div className="text-3xl font-semibold">More reasons to join</div>
      <div className="flex items-center justify-between">
        {optionData.map((key, index) => (
          <div
            className="border p-4 h-64 w-72 rounded-3xl relative bg-gradient-to-br from-blue-500/40 via-pink-500/30 to-purple-500/20"
            key={index}
          >
            <div className="text-xl font-bold">{key.heading}</div>
            <div className="">{key.info}</div>
            <div className="h-16 w-16 absolute bottom-4 right-7">
              {key.logo}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;

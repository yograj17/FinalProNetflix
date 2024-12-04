import React, { useState } from "react";
import { questionData } from "../../utils/questionData";
import { FaChevronDown } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Question = () => {
  let [Arrow, setArrow] = useState(new Array(6).fill(false));

  let clickHandler = (index) => {
    setArrow((prevArrow) => {
      let newArrow = prevArrow.map((key, i) => (i == index ? !key : false));
      return newArrow;
    });
  };

  return (
    <div className="bg-black border-white py-7 px-32 text-white flex flex-col gap-6">
      <div className="text-3xl font-semibold">Frequently Asked Questions</div>
      <div className="flex flex-col gap-4">
        {questionData.map((key, index) => (
          <div className="" key={index}>
            <div
              className="h-20 flex items-center text-2xl font-semibold justify-between px-8 bg-white bg-opacity-15 hover:bg-opacity-20 cursor-pointer"
              onClick={() => clickHandler(index)}
            >
              <div>{key.heading}</div>
              <div className="">
                {Arrow[index] == true ? (
                  <RxCross2 className="h-6 w-6 cursor-pointer" />
                ) : (
                  <FaChevronDown className="h-6 w-6 cursor-pointer" />
                )}
              </div>
            </div>
            {Arrow[index] == true ? (
              <div className="bg-white bg-opacity-40 text-2xl p-8 text-black">
                {key.info}
              </div>
            ) : (
              false
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;

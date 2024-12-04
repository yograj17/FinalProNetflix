import React from "react";
import { LOGO_URL } from "../utils/images";
import { Link } from "react-router-dom";

function Header({ logbut }) {
  return (
    <div className="text-white h-1/5 flex items-center justify-between px-28">
      <Link to={"/"}>
        <div className="h-20">
          <img src={LOGO_URL} className="h-full w-full cursor-pointer" />
        </div>
      </Link>

      {logbut ? (
        <div className="flex gap-6">
          <div className="border border-gray-600 h-10 w-28 flex justify-center items-center cursor-pointer rounded-lg font-semibold bg-white bg-opacity-20">
            Language
          </div>
          <Link to={"/login"}>
            <div className="h-10 w-28 flex justify-center items-center cursor-pointer rounded-lg font-semibold bg-red-600">
              Log In
            </div>
          </Link>
        </div>
      ) : (
        false
      )}
    </div>
  );
}

export default Header;

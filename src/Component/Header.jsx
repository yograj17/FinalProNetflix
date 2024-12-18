import React from "react";
import { LOGO_URL } from "../utils/images";
import { Link } from "react-router-dom";

function Header({ logbut }) {
  return (
    <div className="border text-white h-24 flex justify-between items-center px-6">
      <Link to={"/"}>
        <div className="h-12">
          <img src={LOGO_URL} className="h-full w-full cursor-pointer" />
        </div>
      </Link>

      {logbut ? (
        <div className="flex justify-center items-center gap-3">
          <div className="border border-gray-600  cursor-pointer  bg-white bg-opacity-20 h-8 w-20 flex justify-center items-center rounded-md">
            Language
          </div>
          <Link to={"/login"}>
            <div className="cursor-pointer bg-red-600 h-8 w-14 flex justify-center items-center font-semibold rounded-md text-sm">
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

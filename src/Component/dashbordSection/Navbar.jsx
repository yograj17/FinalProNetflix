import React from "react";
import { LOGO_URL } from "../../utils/images";
import { Link } from "react-router-dom";
import { removeUser } from "../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const Dispach = useDispatch();
  return (
    <div className="h-24 w-full absolute bg-gradient-to-b from-black via-black z-20 flex justify-between px-32  items-center">
      <div className="h-20 w-40">
        <img src={LOGO_URL} className="h-full w-full cursor-pointer" />
      </div>
      <div
        className="border cursor-pointer"
        onClick={() => {
          Dispach(removeUser(false));
        }}
      >
        Log Out
      </div>
    </div>
  );
};

export default Navbar;

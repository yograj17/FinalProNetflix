import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slices/userSlice";

function Dashbord() {
  const Dispach = useDispatch();

  return (
    <div>
      Dashbord
      <div
        className="border border-black"
        onClick={() => Dispach(removeUser(false))}
      >
        Log Out
      </div>
    </div>
  );
}

export default Dashbord;

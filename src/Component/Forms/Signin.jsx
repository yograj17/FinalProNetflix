import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [SigninData, setSigninData] = useState({
    username: "",
    password: "",
    setpassword: "",
  });

  const signinHandler = (e) => {
    const { name, value } = e.target;
    setSigninData((pre) => ({ ...pre, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6">
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="h-12 w-full rounded-lg pl-4 bg-white bg-opacity-20"
          onChange={signinHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="h-12 w-full rounded-lg pl-4 bg-white bg-opacity-20"
          onChange={signinHandler}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="setpassword"
          className="h-12 w-full rounded-lg pl-4 bg-white bg-opacity-20"
          onChange={signinHandler}
        />
        <button
          className="h-12 text-lg font-semibold rounded-lg bg-red-600"
          onClick={submitHandler}
        >
          <Link
            to={"/dashbord"}
            className="h-full text-lg font-semibold rounded-lg bg-red-600 flex justify-center items-center"
          >
            Create an account
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Signin;

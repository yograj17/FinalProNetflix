import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "../../redux/Store";
import { addUser } from "../../redux/slices/userSlice";

function Login() {
  const [LoginData, setLogindata] = useState({ username: "", password: "" });

  const loginHandler = (e) => {
    const { name, value } = e.target;
    setLogindata((pre) => ({ ...pre, [name]: value }));
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
          onChange={loginHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="h-12 w-full rounded-lg pl-4 bg-white bg-opacity-20"
          onChange={loginHandler}
        />

        <button
          className="h-12  text-lg font-semibold rounded-lg bg-red-600"
          onClick={submitHandler}
        >
          <Link
            to={"/dashbord"}
            className="h-full text-lg font-semibold rounded-lg bg-red-600 flex justify-center items-center"
          >
            Log in
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;

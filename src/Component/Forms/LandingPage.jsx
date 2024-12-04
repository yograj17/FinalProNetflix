import React, { useState } from "react";
import { BG_IMG_URL } from "../../utils/images";
import Header from "../Header";
import Login from "../Forms/Login";
import Signin from "./Signin";
import { useDispatch, useSelector } from "react-redux";
import { changeForm } from "../../redux/slices/formTypeSlice";

function LandingPage() {
  const [logbut, setlogbut] = useState(false);
  const FormType = useSelector((state) => state.form.formType);
  const Dispach = useDispatch();

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${BG_IMG_URL})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="h-screen"
      >
        <div className="h-full w-full bg-black bg-opacity-60">
          <Header logbut={logbut} />
          <div className="text-white h-4/5 flex justify-center items-end">
            <div className="h-full w-1/3 bg-black bg-opacity-75 rounded-3xl px-24 py-16 flex flex-col gap-6">
              <div className="text-4xl font-bold">
                {FormType ? "Log In" : "Create Account"}
              </div>
              {FormType ? <Login /> : <Signin />}
              <div>
                {FormType ? "New to Netflix?" : "Already User"}
                <span
                  className="cursor-pointer ml-2 font-semibold"
                  onClick={() => Dispach(changeForm())}
                >
                  {FormType ? "Create an account" : "Log in"}
                </span>
                .
              </div>
              <div>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.<span className="text-blue-800"> Learn more.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

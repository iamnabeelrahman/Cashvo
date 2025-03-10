import React from "react";
import { HeadingPara, SubHeading } from "../component/SubHeading";
import Input from "../component/Input";
import BottomWarning from "../component/BottomWarning";

function Signin() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-indigo-200 flex justify-center items-center h-32">
      <div className="flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg w-96 p-8">
        <SubHeading label={"Sign In"} />
        <HeadingPara label={"Enter your credentials to sign in"} />
        
        <Input placeholder={"John"} label={"First Name"} />
        <Input placeholder={"Doe"} label={"Last Name"} />
        <Input placeholder={"johndoe@gmail.com"} label={"Email"} />
        <Input placeholder={"••••••••"} label={"Password"} type="password" />
        
        <div className="pt-4 w-full">
          <button
            type="button"
            className="w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
          >
            Sign In
          </button>
        </div>
        
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"} />
      </div>
    </div>
  );
}

export default Signin;

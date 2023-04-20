import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { RiAppleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAddUser } from "../components/UserContext";

const Signin = () => {
  const handleClick = useAddUser();

  return (
    <div>
      {/* {user? navigate("/") : navigate("/login")} */}
      <div className="flex lg:flex-row h-screen w-screen flex-col">
        <div className="bg-black text-white lg:w-[40%] flex items-center justify-center  max-lg:h-28 ">
          <div className="text-6xl font-bold">Board.</div>
        </div>
        <div className="  flex-1 flex items-center justify-center flex-col">
          <div className="mb-5 md:w-[40%] w-[70%]">
            <div className=" ">
              <div className="text-2xl font-bold">Sign In</div>
              <div className="pt-2 font-medium">Sign in to your account</div>
            </div>
            <div className=" flex justify-between mt-6 gap-4">
              <button
                className="rounded-lg px-4 bg-white flex-1 h-8 flex items-center justify-center gap-2"
                onClick={handleClick}
              >
                <FcGoogle />
                <span className="text-[#858585] max-xl:hidden text-xs">
                  Sign in with Google
                </span>
              </button>
              <button
                className="rounded-lg px-4 bg-white flex-1 h-8 flex items-center justify-center gap-2"
                onClick={handleClick}
              >
                <RiAppleFill />
                <span className="text-[#858585] text-xs max-xl:hidden">
                  Sign in with Apple
                </span>
              </button>
            </div>
          </div>
          <div className=" bg-white h-[]  md:w-[40%] w-[70%] p-7 rounded-xl">
            <form>
              <div className="flex flex-col gap-2">
                <span>Email address</span>
                <input
                  type="text"
                  placeholder="email..."
                  className="active:outline-none focus:outline-none rounded-lg px-4 h-8 bg-[#F5F5F5] focus:bg-[#EAEAEA]"
                />
              </div>
              <div className="flex flex-col gap-2 my-6">
                <span>Password</span>
                <input
                  type="text"
                  placeholder="password..."
                  className="active:outline-none focus:outline-none rounded-lg px-4 h-8 bg-[#F5F5F5] focus:bg-[#EAEAEA]"
                />
              </div>
              <div className="text-[#346BD4]">Forgot Password?</div>
              <button
                className="bg-black text-white mt-6 h-8 rounded-lg w-[100%] font-bold"
                onClick={handleClick}
              >
                Sign in
              </button>
            </form>
          </div>
          <div className="mt-6">
            <span>Dont have an account? </span>
            <Link to="/register" className="text-[#346BD4]">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

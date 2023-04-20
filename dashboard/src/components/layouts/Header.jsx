import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { useUser } from "../UserContext";
import { signOut } from "firebase/auth";
import { auth } from "../../config";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useUser();
  const nav = useNavigate();
  function handleSignOut() {
    signOut(auth).then(() => {
      nav("/login");
    });
  }

  console.log(user);
  return (
    <div className=" h-15 flex items-center justify-between mt-20 md:mt-4 mx-4 md:m-6 ">
      <div className=" items-center font-[700] text-[24px] max-md:hidden">
        Dashboard
      </div>
      <div className=" flex items-center justify-between max-md:w-full gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="search..."
            className="active:outline-none focus:outline-none rounded-md px-4 h-7  max-md:w-40 "
          />
          <BiSearch className="absolute top-0 bottom-0 my-auto  text-lg text-[#858585]  right-3" />
        </div>
        <div className=" flex items-center">
          <BsBell className=" mr-4" />
          <img
            src={user && user.photoURL}
            alt="profile"
            className=" rounded-full h-8 hover:cursor-pointer"
            onClick={handleSignOut}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

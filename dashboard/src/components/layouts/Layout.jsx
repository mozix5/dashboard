import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import MenubarMobile from "./MenubarMobile";

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className=" h-screen w-screen flex flex-row ">
      <Sidebar show={showSidebar} setter={setShowSidebar} />
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
      <div>
        
      <MenubarMobile setter={setShowSidebar} />
        <Header />
      </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

import { useEffect, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="bg-white min-h-screen">
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;

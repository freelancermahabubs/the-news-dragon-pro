import React from "react";
import NavegationBar from "../pages/Shared/NavegationBar/NavegationBar";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <NavegationBar />
      <Outlet />
    </div>
  );
};

export default LoginLayout;

import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Login from "../Pages/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="max-w-[1440px] mx-auto py-4">
        <Navbar></Navbar>
      </header>
      <main className="max-w-[1440px] mx-auto py-5">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;

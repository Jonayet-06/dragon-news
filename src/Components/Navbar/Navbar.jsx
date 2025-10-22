import React from "react";
import user from "../../assets/user.png";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  return (
    <div className="nav flex justify-between items-center mt-5">
      <div></div>
      <div className="flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

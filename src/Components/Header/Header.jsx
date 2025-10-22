import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto text-center">
      <img className="mx-auto w-[470px] h-[60px] my-[20px]" src={logo} alt="" />
      <p className="text-accent mb-[20px]">Journalism Without Fear or Favour</p>
      <p className="text-accent">{format(new Date(), "EEEE, LLLL dd, yyyy")}</p>
    </div>
  );
};

export default Header;

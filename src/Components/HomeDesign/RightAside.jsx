import React from "react";
import SocialLogin from "./SocialLogin";
import FindUs from "./FindUs";
import QZone from "./QZone";
import BgImg from "./BgImg";

const RightAside = () => {
  return (
    <div className="space-y-10">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <QZone></QZone>
      <BgImg></BgImg>
    </div>
  );
};

export default RightAside;

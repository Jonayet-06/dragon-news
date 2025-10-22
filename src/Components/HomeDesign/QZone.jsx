import React from "react";
import swimming from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroudImg from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img className="mx-auto" src={swimming} alt="" />
        <img className="mx-auto" src={classImg} alt="" />
        <img className="mx-auto" src={playgroudImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;

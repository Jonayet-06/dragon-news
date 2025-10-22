import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item text-accent bg-base-100 justify-start">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn join-item text-accent bg-base-100 justify-start">
            <FaTwitter />
            Twitter
          </button>
          <button className="btn join-item text-accent bg-base-100 justify-start">
            <FaInstagram />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

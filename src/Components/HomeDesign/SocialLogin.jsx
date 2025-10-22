import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        <button className="btn btn-outline btn-info w-full">
          <FaGoogle size={24} />
          Login With Google
        </button>
        <button className="btn btn-outline btn-success w-full">
          <FaGithub size={24} />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;

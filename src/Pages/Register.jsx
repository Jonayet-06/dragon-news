import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-center pb-2">
            Register your account
            <p className="border-b-1 border-gray-300 pt-10"></p>
          </h1>
          <fieldset className="fieldset">
            {/* Your Name */}
            <label className="label">Your Name</label>
            <input
              type="name"
              className="input"
              placeholder="Enter Your Name"
            />

            <label className="label">Photo URL</label>
            <input
              type="photoUrl"
              className="input"
              placeholder="Enter Your Photo URL"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter Your Email Address"
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password"
            />
            <button className="btn btn-neutral mt-4">Register</button>
            <p className=" font-semibold text-accent text-center py-5">
              Already Have An Account ?{" "}
              <Link className="text-red-500" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;

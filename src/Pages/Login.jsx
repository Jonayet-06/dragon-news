import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="font-bold text-2xl text-center pb-2">
            Login your account
            <p className="border-b-1 border-gray-300 pt-10"></p>
          </h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className=" font-semibold text-accent text-center py-5">
            Dont’t Have An Account ?{" "}
            <Link className="text-red-500" to="/auth/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

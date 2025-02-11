import React, { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister } from "../../actions/userActions";

const RegisterPage = () => {
  let Navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() || email.trim() || password.trim()) {
      dispatch(userRegister(name, email, password));
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <DefaultLayout>
      <div className="flex gap-10 min-h-[100vh]">
        <div className="flex-1 flex w-[500px] justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold">Create Account!</h1>
            <p>Join us today</p>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">
              Register Form
            </h1>
            <form className="flex flex-col gap-3"
            onSubmit={handleSubmit}
            >
              <input
                className="py-2 px-4 rounded-sm text-black"
                type="text"
                id="name"
                placeholder="Full Name"
                onChange={(e)=>setName(e.target.value)}
              />
              <input
                className="py-2 px-4 rounded-sm text-black"
                type="email"
                id="email"
                placeholder="Email address"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <input
                className="py-2 px-4 rounded-sm text-black"
                type="password"
                id="pw"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
              <input
                className="bg-blue-700 py-2 px-4 rounded-md cursor-pointer"
                type="submit"
                value={"Register"}
              />
            </form>

            <div className="flex items-center justify-center mt-4 mb-4">
              <hr className="flex-1 border-t border-gray-300" />
              <p className="mx-4">or</p>
              <hr className="flex-1 border-t border-gray-300" />
            </div>

            <button
              className="bg-cyan-500 p-2 rounded-lg"
              onClick={() => Navigate("/login")}
            >
              Already have an account? Login
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;

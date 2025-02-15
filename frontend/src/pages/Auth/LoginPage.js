import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin, getCurrentUser } from "../../actions/userActions";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const currentUser = useSelector((state) => state.users.currentUser);

  useEffect(() => {
    if (currentUser?.userId) {
      navigate("/todos");
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      await dispatch(userLogin(email, password));
      await dispatch(getCurrentUser());
    }
  };

  return (
    <DefaultLayout>
      <div className="flex gap-10 min-h-[100vh]">
        <div className="flex-1 flex w-[500px] justify-center items-center ">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold">Welcome Back!</h1>
            <p>Let's start</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Login Form</h1>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                className="py-2 px-4 rounded-sm text-black"
                type="email"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="py-2 px-4 rounded-sm text-black"
                type="password"
                id="pw"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="bg-blue-700 py-2 px-4 rounded-md cursor-pointer"
                type="submit"
                value={"Submit"}
              />
            </form>
            <div className="flex items-center justify-center mt-4 mb-4">
              <hr className="flex-1 border-t border-gray-300" />
              <p className="mx-4">or</p>
              <hr className="flex-1 border-t border-gray-300" />
            </div>
            <button
              className="bg-cyan-500 p-2 rounded-lg"
              onClick={() => navigate("/register")}
            >
              Create new account
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LoginPage;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../actions/userActions";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleLogout = async()=>{
    await dispatch(userLogout())
    navigate("/login")
  }

  return (
    <div className="flex items-center justify-between bg-gray-900 w-full py-2 px-8 max-sm:px-2">
      <div className="font-mono font-bold text-4xl max-sm:text-sm">
        ToDoList
      </div>

      <div className="font-mono font-semibold text-xl text-gray-400 max-sm:hidden">
        Create your list
      </div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-700 max-sm:w-8 max-sm:h-8">
          <img
            src={currentUser?.image}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <span className="font-mono font-medium max-sm:hidden">
          {currentUser?.name || 'guest'}
        </span>
        <button
        className="bg-red-600 p-2 rounded-lg"
        onClick={() => handleLogout()}>LogOut</button>
      </div>
    </div>
  );
};

export default Header;

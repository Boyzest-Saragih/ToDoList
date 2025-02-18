import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaTrash, FaThumbsDown } from "react-icons/fa";

const Header = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = currentUser.name.split(" ")[0];

  const handleLogout = async () => {
    await dispatch(userLogout());
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between bg-gray-900 w-full py-2 px-8 max-sm:px-2">
      <div
        className="font-mono font-bold text-4xl cursor-pointer max-sm:text-lg"
        onClick={() => navigate("/")}
      >
        Boyoker.
      </div>

      <div className="font-mono font-semibold text-xl text-gray-400 max-sm:hidden">
        <a
          href="https://www.instagram.com/p/DF7BrC-ziKN/?igsh=eWQ1Y2Y4bzhmbnZy"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          CORETAX
          <FaTrash />
          <FaThumbsDown />
        </a>
      </div>

      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-full bg-gray-700 cursor-pointer max-sm:w-10 max-sm:h-10"
          onClick={() => navigate("/profile")}
        >
          <img
            src={currentUser?.image}
            alt=""
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <span className="font-mono font-semibold text-lg max-sm:hidden">
          {name || ""}
        </span>
        <button
          className="bg-red-600 p-2 rounded-lg"
          onClick={() => handleLogout()}
        >
          <FaArrowRightToBracket className=" w-6 h-6 max-sm:w-4 max-sm:h-4" />
        </button>
      </div>
    </div>
  );
};

export default Header;

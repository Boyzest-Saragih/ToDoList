import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import ButtonEditPicture from "./ButtonEditPicture";
import { getCurrentUser, editUser } from "../../actions/userActions";

const ProfileLanding = () => {
  const currentUser = useSelector((state) => state.users.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState(currentUser.password);
  const id = currentUser.userId;

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const handleEditSave = async () => {
    if (!password) {
      return alert("Password required");
    }
    await dispatch(editUser(id, name, email, password));
    await dispatch(getCurrentUser());
    setIsEdit(false);
  };

  return (
    <div className="mt-8">
      <div className="flex gap-4 max-sm:flex-col max-sm:w-80">
        <div className="w-[500px] max-sm:w-full p-5 border border-gray-600 hover:border-blue-700">
          <h1 className="font-bold text-2xl mb-4">Profile</h1>
          <div className="flex gap-4">
            <img
              src={currentUser.image}
              alt="profile pict"
              className="w-[90px] h-[90px] object-cover rounded-lg border border-blue-700"
            />
            <div>
              <h2>{currentUser.name}</h2>
              <p>{currentUser.email}</p>
            </div>
          </div>
          <hr className="flex-1 border-t mt-4 border-gray-300" />
          <div className="flex justify-center mt-4 bg-blue-700 p-2 rounded-lg w-[120px]">
            <ButtonEditPicture />
          </div>
        </div>
        <div className="p-5 w-[500px] max-sm:w-full border border-gray-600 hover:border-blue-700">
          <h1 className="font-bold text-2xl mb-4">User Data</h1>
          {!isEdit ? (
            <>
              <table className="w-full">
                <tbody>
                  <tr className="">
                    <td className="">Name</td>
                    <td className="">:</td>
                    <td className="font-semibold">{currentUser.name}</td>
                  </tr>
                  <tr className="">
                    <td className="">Email</td>
                    <td className="">:</td>
                    <td className="font-semibold">{currentUser.email}</td>
                  </tr>
                  <tr>
                    <td className="">Password</td>
                    <td className="">:</td>
                    <td className="font-semibold">********</td>
                  </tr>
                </tbody>
              </table>
              <button
                className="mt-10 bg-blue-700 p-2 rounded-lg"
                onClick={() => setIsEdit(true)}
              >
                Edit Data
              </button>
            </>
          ) : (
            <>
              <table className="w-full">
                <tbody>
                  <tr className="">
                    <td className="">Name</td>
                    <td className="">:</td>
                    <td className="font-semibold">
                      <input
                        type="text"
                        defaultValue={currentUser.name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-2 w-52 rounded-sm bg-white text-gray-700"
                      />
                    </td>
                  </tr>
                  <tr className="">
                    <td className="">Email</td>
                    <td className="">:</td>
                    <td className="font-semibold">
                      <input
                        type="text"
                        defaultValue={currentUser.email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-2 w-52 rounded-sm bg-white text-white"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="">Password</td>
                    <td className="">:</td>
                    <td className="font-semibold">
                      <input
                        type="password"
                        defaultValue={currentUser.password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-2 w-52 rounded-sm bg-white text-gray-700"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex gap-4 mt-10">
                <button
                  className="bg-blue-700 p-2 rounded-lg"
                  onClick={() => handleEditSave()}
                >
                  Confirm
                </button>
                <button
                  className="bg-red-700 p-2 rounded-lg"
                  onClick={() => setIsEdit(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div>
      </div>
      <div
        className="fixed top-20 left-8 max-sm:top-14 max-sm:left-2 p-2 bg-blue-500 rounded-full cursor-pointer"
        onClick={() => navigate("/")}
      >
        <TiArrowBack />
      </div>
    </div>
  );
};

export default ProfileLanding;

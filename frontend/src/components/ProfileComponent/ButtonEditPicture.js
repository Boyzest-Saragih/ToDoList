import React, { useState } from "react";
import ModalCard from "../Modals/ModalCard";
import { editProfilePicture } from "../../api/userAPI";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ButtonEditPicture = () => {
  const [openModal, setOpenModal] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await editProfilePicture(file);
    setLoading(false);
    setOpenModal(false);
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Edit Picture</button>
      <ModalCard isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="absolute cursor-pointer p-1 rounded-full bg-red-600 z-50"
        onClick={()=>setOpenModal(false)}
        >
          <AiOutlineCloseCircle size={28} />
        </div>
        <div className="relative w-full h-full flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center text-center gap-4 h-full z-10"
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
              className="flex text-center bg-white p-2 rounded-sm text-black"
            />
            <input
              type="submit"
              value="Confirm"
              className="bg-blue-600 border-none p-1 w-32 rounded-xl cursor-pointer"
            />
          </form>

          {loading && (
            <div className="absolute inset-0 flex justify-center items-center bg-black/50 z-20">
              <h1 className="bg-black p-4 rounded-lg text-2xl font-black text-white">
                Loading...
              </h1>
            </div>
          )}
        </div>
      </ModalCard>
    </>
  );
};

export default ButtonEditPicture;

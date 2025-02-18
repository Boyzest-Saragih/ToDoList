import React from "react";

const ModalCard = ({isOpen, onClose,children}) => {
    if(!isOpen){
        return null
    }
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-gray-400 h-56 w-[500px] p-4 border-2 border-black rounded-lg shadow-md">
        {children}
      </div>
    </div>
  );
};

export default ModalCard;

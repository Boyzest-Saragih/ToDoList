import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions/todoActions";
import { getCurrentUser } from "../../actions/userActions";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const currentUser = useSelector((state) => state.users.currentUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!currentUser) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length >= 50) {
      alert("panjang karakter tidak boleh melebihi 50");
      return;
    }
    if (title.trim()) {
      dispatch(addTodo(title, currentUser.userId));
      setTitle("");
    }
  };

  return (
    <>
    <h1 className="hidden max-sm:block mt-8 font-mono font-extrabold text-xl underline text-gray-100">CREATE YOUR LIST</h1>
      <div className="max-w-2xl w-full mx-auto mt-12 max-sm:flex max-sm:w-80 max-sm:mt-8">
        <form
          className="flex gap-4 items-center w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="flex-1 p-3 text-black bg-gray-100 rounded-lg border-2 border-transparent 
                     focus:border-cyan-600 focus:outline-none transition-colors
                     placeholder:text-gray-400 text-sm max-sm:p-2"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            maxLength={50}
          />
          <button
            className="bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg text-sm font-medium
                     transition-colors duration-200 shadow-lg hover:shadow-cyan-500/20 max-sm:px-3 max-sm:py-2"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default TodoForm;

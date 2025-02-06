import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTodos,
  toggleTodo,
  deleteTodo,
  editTodo,
} from "../actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const [isEdit, setIsEdit] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filterTodos = todos.filter((todo) => {
    if (filter === "COMPLETED") return todo.completed;
    if (filter === "INCOMPLETED") return !todo.completed;
    return true;
  });

  if (loading) return (
    <div className="flex justify-center items-center mt-8">
      <div className="text-cyan-500 text-lg">Loading...</div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center mt-8">
      <div className="text-red-500 text-lg">Error: {error}</div>
    </div>
  );

  function handleEditOpen(todo) {
    setIsEdit(todo._id);
    setEditTitle(todo.title);
  }

  function handleEditSave(id) {
    if (editTitle.length >= 50) {
      return alert("Panjang karakter melebihi 50")
    }
    dispatch(editTodo(id, editTitle));
    setIsEdit(null);
  }

  function handleEditCancel() {
    setIsEdit(null);
    setEditTitle("");
  }

  return (
    <div className="max-w-2xl w-full mx-auto mt-4">
      <ul className="flex flex-col gap-3">
        {filterTodos.map((todo) => (
          <li 
            className="flex bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl shadow-lg transition-all hover:shadow-cyan-500/10"
            key={todo._id}
          >
            {isEdit === todo?._id ? (
              <div className="flex w-full gap-4 items-center">
                <input
                  className="flex-1 p-2 text-black bg-gray-100 rounded-lg border-2 border-transparent 
                           focus:border-cyan-600 focus:outline-none transition-colors"
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  maxLength={50}
                />
                <div className="flex gap-2">
                  <button
                    className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-sm font-medium
                             transition-colors duration-200"
                    onClick={() => handleEditSave(todo._id)}
                  >
                    Confirm
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium
                             transition-colors duration-200"
                    onClick={() => handleEditCancel()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex w-full items-center gap-4">
                <label className="relative flex items-center cursor-pointer">
                  <input
                    className="peer appearance-none w-5 h-5 border-2 border-gray-500 rounded 
                             checked:border-cyan-500 checked:bg-cyan-500 transition-colors"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo._id, todo.completed))}
                  />
                  <svg 
                    className="absolute w-5 h-5 pointer-events-none hidden peer-checked:block text-white"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </label>
                <span
                  className={`flex-1 cursor-pointer text-sm ${
                    todo.completed ? "line-through text-gray-400 italic" : ""
                  }`}
                  onClick={() => dispatch(toggleTodo(todo._id, todo.completed))}
                >
                  {todo.title}
                </span>
                <div className="flex gap-2">
                  <button
                    className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg text-sm font-medium
                             transition-colors duration-200"
                    onClick={() => handleEditOpen(todo)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium
                             transition-colors duration-200"
                    onClick={() => dispatch(deleteTodo(todo._id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
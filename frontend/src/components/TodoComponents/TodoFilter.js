import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../actions/todoActions";

const TodoFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="max-w-2xl w-full mx-auto flex justify-end my-7">
      <select
        className="bg-cyan-600 text-white px-4 py-2 rounded-lg cursor-pointer
                   hover:bg-cyan-700 transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2
                   focus:ring-offset-gray-950 text-sm font-medium
                   max-sm:mr-6
                   "
        onChange={handleFilterChange}
        defaultValue="ALL"
      >
        <option value="ALL">All Tasks</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETED">Incompleted</option>
      </select>
    </div>
  );
};

export default TodoFilter;
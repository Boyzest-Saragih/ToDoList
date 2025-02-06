import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/todoActions';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length >= 50) {
      alert('panjang karakter tidak boleh melebihi 50')
      return
    }
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <div className='max-w-2xl w-full mx-auto mt-12'>
      <form 
        className='flex gap-4 items-center w-full'
        onSubmit={handleSubmit}
      >
        <input
          className='flex-1 p-3 text-black bg-gray-100 rounded-lg border-2 border-transparent 
                     focus:border-cyan-600 focus:outline-none transition-colors
                     placeholder:text-gray-400 text-sm'
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          maxLength={50}
        />
        <button
          className='bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg text-sm font-medium
                     transition-colors duration-200 shadow-lg hover:shadow-cyan-500/20'
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
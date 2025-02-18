import {
  fetchTodos as fetchTodosApi,
  addTodos as addTodosApi,
  editTodos as editTodosApi,
  toggleTodos as toggleTodosApi,
  deleteTodos as deleteTodosApi,
} from "../api/todoAPI";

export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODO_REQUEST" });
  try {
    const todos = await fetchTodosApi();
    dispatch({ type: "FETCH_TODO_SUCCESS", payload: todos });
  } catch (error) {
    dispatch({ type: "FETCH_TODO_FAILURE", payload: error.message });
  }
};

export const addTodo = (title,userId) => async (dispatch) => {
  try {
    const todo = await addTodosApi(title,userId);
    dispatch({ type: "ADD_TODO_SUCCESS", payload: todo });
  } catch (error) {
    console.log(error);
  }
};

export const editTodo = (id, title) => async (dispatch) => {
  try {
    const todo = await editTodosApi(id,title);
    dispatch({ type: "EDIT_TODO_SUCCESS", payload: todo });
  } catch (error) {
    console.log(error);
  }
};

export const toggleTodo = (id,completed) => async (dispatch) => {
  try {
    const todo = await toggleTodosApi(id,completed);
    dispatch({ type: "TOGGLE_TODO_SUCCESS", payload: todo });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteTodosApi(id);
    dispatch({ type: "DELETED_TODO_SUCCESS", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter) => {
  return { type: "SET_FILTER", payload: filter };
};

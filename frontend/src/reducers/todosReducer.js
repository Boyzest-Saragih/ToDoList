const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TODO_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_TODO_SUCCESS":
      return { ...state, loading: false, todos: action.payload };
    case "FETCH_TODO_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "ADD_TODO_SUCCESS":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TOGGLE_TODO_SUCCESS":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo._id === action.payload._id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "DELETED_TODO_SUCCESS":
        return{...state,todos:state.todos.filter((todo)=> todo._id !==action.payload)}
    case "EDIT_TODO_SUCCESS":
      console.log("Editing : ", action.payload);
        return{
            ...state,
            todos: state.todos.map((todo)=>
                todo._id === action.payload._id?{...todo, title:action.payload.title} : todo
            )
        }
    default:
      return state
  }
};

export default todosReducers
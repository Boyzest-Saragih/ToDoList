const initialState = {
  users: [],
  currentUser: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload };
    case "USER_LOGIN_SUCCESS":
      return { ...state, currentUser: action.payload };
    case "USER_REGISTER_SUCCESS":
      return { ...state, users: action.payload };
    case "GET_CURRENT_USER_SUCCESS":
      return { ...state, currentUser: action.payload };
    case "USER_LOGOUT_SUCCESS":
      return { ...state, currentUser: null };
    case "EDIT_USER_SUCCESS":
      return {
        ...state,
        currentUser:
          state.currentUser._id === action.payload._id
            ? { ...state.currentUser, ...action.payload }
            : state.currentUser,
      };
    default:
      return state;
  }
};

export default usersReducer;

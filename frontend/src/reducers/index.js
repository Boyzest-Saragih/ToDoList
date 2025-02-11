import {combineReducers} from "redux"
import todosReducers from "./todosReducer"
import filterReducers from "./filterReducers"
import counterReducers from "./counterReducers"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
    todos:todosReducers,
    filter: filterReducers,
    users : usersReducer,
    counter: counterReducers
})

export default rootReducer

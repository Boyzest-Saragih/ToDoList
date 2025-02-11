import {combineReducers} from "redux"
import todosReducers from "./todosReducer"
import filterReducers from "./filterReducers"
import counterReducers from "./counterReducers"
import usersReducer from "./usersReducer"

const rootReducer = combineReducers({
    todos:todosReducers,
    filter: filterReducers,
    users : usersReducer,
    count : counterReducers
})

export default rootReducer

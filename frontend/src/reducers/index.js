import {combineReducers} from "redux"
import todosReducers from "./todosReducer"
import filterReducers from "./filterReducers"

const rootReducer = combineReducers({
    todos:todosReducers,
    filter: filterReducers
})

export default rootReducer

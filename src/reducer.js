import { combineReducers } from "redux";
import todoReducer from "./features/todos/todosSlice";
import filterReducer from "./features/filter/filterSlice";


const rootReducer=combineReducers({
    todos : todoReducer,
    filters : filterReducer
})


export default rootReducer;
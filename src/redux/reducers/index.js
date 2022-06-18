import { combineReducers } from "redux";
import counterReducer from "./counter";
import logReducer from "./isLogged";
import colorReducer from "./color";

export const reducers = combineReducers({
    counterReducer,
    logReducer,
    colorReducer
})

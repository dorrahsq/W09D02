import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import signIn from "./login";
import  taskss  from "./task";
const reducer = combineReducers({ signIn , taskss });

const store = () => {
  return createStore(reducer, composeWithDevTools());
};

export default store();

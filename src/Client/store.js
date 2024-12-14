import { legacy_createStore } from "redux";
import ClientReducer from "./reducer";

const store = legacy_createStore(ClientReducer)
export default store
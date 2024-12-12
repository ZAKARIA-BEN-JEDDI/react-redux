import { combineReducers, legacy_createStore } from "redux";
import { reducerUser } from "./reducer";

const test = combineReducers({
  user:reducerUser
})
//TODO a la place de placer reducerUser directement legacy_createStore
//TODO il faut ajouter l'etape combineRedcuers

const store = legacy_createStore(test)
export default store
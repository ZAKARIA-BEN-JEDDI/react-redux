import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk"; // Importez "thunk" explicitement
import { combineReducers } from "redux";
import ClientReducer from "./reducer";

// Combinez les réducteurs
const rootReducer = combineReducers({
  client: ClientReducer,
});

// Créez le store en appliquant le middleware redux-thunk
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;

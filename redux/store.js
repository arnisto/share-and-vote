import { createStore } from "redux";
import rootReducer from "./rootReducer";
let initialState = {};

const store = createStore(
  rootReducer,
  // composeWithDevTools(
  // applyMiddleware(logger)
  // other store enhancers if any
  // )
  initialState
);

export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";

import appReducer from "./app/reducer";
import todosReducer from "./todos/reducer";

const reducer = combineReducers({
  appState: appReducer,
  todosState: todosReducer,
});

const initialState = {};

const logger = createLogger({});

const middleware = [thunk, logger];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

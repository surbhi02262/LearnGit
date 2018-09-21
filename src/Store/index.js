import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";

let middleware = applyMiddleware(thunk, logger);
let rootReducer = combineReducers({});
const store = createStore(
  rootReducer,
  compose(
    middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;

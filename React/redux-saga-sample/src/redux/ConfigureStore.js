import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./reducer";
import thunk from "redux-thunk";

export default function ConfigureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add suport for redux dev tools
  return createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

import { createStore, compose, applyMiddleware } from "redux";
import RootReducer from "./reducer";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./initSagas";

export default function ConfigureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add suport for redux dev tools
  const store = createStore(
    RootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
    //    composeEnhancers(applyMiddleware(thunk))
  );

  initSagas(sagaMiddleware);

  return store;
}

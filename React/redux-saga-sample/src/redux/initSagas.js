import * as sagas from "./sagas";

export const initSagas = sagaMiddleWare => {
  Object.values(sagas).forEach(sagaMiddleWare.run.bind(sagaMiddleWare));
};

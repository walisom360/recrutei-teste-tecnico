import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { routerMiddleware } from "connected-react-router";
import history from "../routes/history";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const store = createStore(
  rootReducer(history),
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;

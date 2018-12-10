import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';

import combineReducers from './ducks';

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

const store = createStore(combineReducers, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;

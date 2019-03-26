import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from '../reducerFactory'

import rootSaga from '../saga'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

window.stote = store

sagaMiddleware.run(rootSaga)

export default store

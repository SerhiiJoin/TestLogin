import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';

const store = createStore(reducers, {}, applyMiddleware(thunk, createLogger()));

export default store;

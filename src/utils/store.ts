import { legacy_createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from '../services/reducers'

import thunk from 'redux-thunk';
import { socketMiddleware } from '../services/middleware/socket-middleware';
import { ordersWsActions } from '../services/actions/socket';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ordersWsMiddleware = socketMiddleware(ordersWsActions);

const enhancer = composeEnhancers(applyMiddleware(thunk, ordersWsMiddleware));

export const store = legacy_createStore(rootReducer, enhancer); 



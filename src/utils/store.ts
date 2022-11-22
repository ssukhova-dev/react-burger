import { legacy_createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from '../services/reducers'

import thunk from 'redux-thunk';
import { socketMiddleware } from '../services/middleware/socket-middleware';
import { ordersWsActions } from '../services/actions/socket';
import { profileOrdersWsActions } from '../services/actions/profile-socket';
import { loginSuccess } from '../services/actions/login';
import JsCookie from "js-cookie"
import { Token } from './constants';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const ordersWsMiddleware = socketMiddleware(ordersWsActions);
const profileOrdersWsMiddleware = socketMiddleware(profileOrdersWsActions);

const enhancer = composeEnhancers(applyMiddleware(thunk, ordersWsMiddleware, profileOrdersWsMiddleware));

export const store = legacy_createStore(rootReducer, enhancer); 


const accessToken = JsCookie.get(Token.access)!;
const refreshToken = JsCookie.get(Token.refresh)!;
store.dispatch(loginSuccess(accessToken, refreshToken, {name: '', email: '', password:''}));


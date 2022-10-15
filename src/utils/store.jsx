import { legacy_createStore, compose, applyMiddleware } from 'redux';
import {rootReducer} from '../services/reducers'

//import {checkSessionThunk} from '../services/actions/login'

import thunk from 'redux-thunk';


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));


export const store = legacy_createStore(rootReducer, enhancer); 

//store.dispatch(checkSessionThunk());
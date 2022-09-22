import { legacy_createStore, compose } from 'redux';
import {rootReducer} from '../services/reducers/root-reducer'


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers();




const preloadedState = {
    ingredients: [],
    cart: [],
    currentIngredient: null,
    order: null
}



export const store = legacy_createStore(rootReducer, preloadedState, enhancer); 
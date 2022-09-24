import { combineReducers } from 'redux';
import { ingredientsReducer } from './burger-ingredients';
import { cartReducer } from './burger-constructor'

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cart: cartReducer,
  });
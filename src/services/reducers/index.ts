import { combineReducers } from 'redux';
import { ingredientsReducer, currentIngredientReducer, tabReducer } from './burger-ingredients';
import { cartReducer } from './burger-constructor'
import { ordersReducer } from './cart-total'
import { loginReducer } from './login';
import { wsOrdersReducer } from './orders-socket';

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    cart: cartReducer,
    order: ordersReducer,
    currentIngredient: currentIngredientReducer,
    tabs: tabReducer,
    login: loginReducer,
    orders: wsOrdersReducer,
  });
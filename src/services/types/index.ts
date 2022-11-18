
import { TConstructorActions } from '../actions/burger-constructor';
import { TCurrentIngredientActions,
         TCurrentTabActions,
         TIngredientActions } from '../actions/burger-ingredients';
import { TOrderActions } from '../actions/cart-total';
import { TLoginActions } from '../actions/login';
import { TLogoutActions } from '../actions/logout';
import { TRegisterActions } from '../actions/register';
import { TProfileActions } from '../actions/profile';
import { TPasswordActions } from '../actions/password';
import { TOrdersWsActions } from '../actions/socket';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer } from '../reducers';
import { TCurrentOrderActions } from '../actions/order';

//export type RootState = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов приложения
type TApplicationActions = 
    | TConstructorActions
    | TIngredientActions
    | TCurrentIngredientActions
    | TCurrentTabActions
    | TOrderActions
    | TLoginActions
    | TLogoutActions
    | TRegisterActions
    | TProfileActions
    | TPasswordActions
    | TOrdersWsActions
    | TCurrentOrderActions;


//export type AppThunk<TReturn = void> = ActionCreator<
//    ThunkAction<TReturn, Action, RootState, TApplicationActions>
//  >; 

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType, // return value type
  RootState, // app state type
  never, // extra argument type
  TApplicationActions // action type
>;

export type AppDispatch = ThunkDispatch<RootState, never, TApplicationActions>;
//export type AppDispatch = typeof store.dispatch; 
//export type AppDispatch = Dispatch<TApplicationActions>; 
import { store } from '../../utils/store';
import { TConstructorActions } from '../actions/burger-constructor';
import { TCurrentIngredientActions,
         TCurrentTabActions } from '../actions/burger-ingredients';
import { TOrderActions } from '../actions/cart-total';
import { TLoginActions } from '../actions/login';
import { TLogoutActions } from '../actions/logout';
import { TRegisterActions } from '../actions/register';
import { TProfileActions } from '../actions/profile';
import { TPasswordActions } from '../actions/password';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
type TApplicationActions = 
    | TConstructorActions
    | TCurrentIngredientActions
    | TCurrentTabActions
    | TOrderActions
    | TLoginActions
    | TLogoutActions
    | TRegisterActions
    | TProfileActions
    | TPasswordActions;


export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, RootState, TApplicationActions>
  >; 

export type AppDispatch = typeof store.dispatch; 
//export type AppDispatch = Dispatch<TApplicationActions>; 
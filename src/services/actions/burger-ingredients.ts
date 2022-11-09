import {getIngredientsData} from '../../utils/burger-api'
import { TIngredient } from '../../utils/types';
import { AppDispatch, AppThunk } from '../types';

export const GET_INGREDIENTS_REQUEST: 'GET_INGREDIENTS_REQUEST' = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS: 'GET_INGREDIENTS_SUCCESS' = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR: 'GET_INGREDIENTS_ERROR' = 'GET_INGREDIENTS_ERROR';

export const ADD_CURRENT_INGREDIENT: 'ADD_CURRENT_INGREDIENT' = 'ADD_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT: 'REMOVE_CURRENT_INGREDIENT' = 'REMOVE_CURRENT_INGREDIENT';

export const SET_CURRENT_TAB: 'SET_CURRENT_TAB' = 'SET_CURRENT_TAB';

export interface IGetIngredientRequest {
  readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface IGetIngredientSuccess {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly ingredients: Array<TIngredient>;
}

export interface IGetIngredientError {
  readonly type: typeof GET_INGREDIENTS_ERROR;
}

export type TIngredientActions = 
  | IGetIngredientRequest
  | IGetIngredientSuccess
  | IGetIngredientError;


function getIngredientRequest (): IGetIngredientRequest{
  return {
    type: GET_INGREDIENTS_REQUEST
  }
}

function getIngredientSuccess(ingredients: Array<TIngredient>): IGetIngredientSuccess{
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients
  }
}

function getIngredientError(): IGetIngredientError {
  return {
    type: GET_INGREDIENTS_ERROR
  }
}

export const getIngredients: AppThunk = () => (dispatch: AppDispatch) =>  {
      dispatch(getIngredientRequest());

      getIngredientsData().then(res => {
        if (res && res.success) {
          dispatch(getIngredientSuccess( res.data ));
        } else {
          dispatch(getIngredientError());
        }
      })
      .catch(e => {
        dispatch(getIngredientError());
    });;
};


export interface IAddCurrentIngredient {
  readonly type: typeof ADD_CURRENT_INGREDIENT;
  readonly ingredient: TIngredient;
}

export interface IRemoveCurrentIngredient {
  readonly type: typeof REMOVE_CURRENT_INGREDIENT;
}
  
export type TCurrentIngredientActions = 
| IAddCurrentIngredient
| IRemoveCurrentIngredient;


export interface ISetCurrentTab {
  readonly type: typeof SET_CURRENT_TAB;
  readonly currentTab: string;
}

export type TCurrentTabActions = 
| ISetCurrentTab;
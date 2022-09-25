import {getIngredientsData} from '../../utils/burger-api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const ADD_CURRENT_INGREDIENT = 'ADD_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT = 'REMOVE_CURRENT_INGREDIENT';

export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';


function getIngredientRequest() {
  return {
    type: GET_INGREDIENTS_REQUEST
  }
}

function getIngredientSuccess(data) {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredients: data
  }
}

function getIngredientError() {
  return {
    type: GET_INGREDIENTS_ERROR
  }
}

export function getIngredients() {
    return function(dispatch) {
      dispatch(getIngredientRequest);

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
  }

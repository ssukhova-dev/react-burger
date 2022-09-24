import {getIngredientsData} from '../../utils/burger-api'

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR';

export const ADD_CURRENT_INGREDIENT = 'ADD_CURRENT_INGREDIENT';
export const REMOVE_CURRENT_INGREDIENT = 'REMOVE_CURRENT_INGREDIENT';

export const SET_CURRENT_TAB = 'SET_CURRENT_TAB';


export function getIngredients() {
    return function(dispatch) {
      dispatch({
        type: GET_INGREDIENTS_REQUEST
      });
      getIngredientsData().then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_INGREDIENTS_SUCCESS,
            ingredients: res.data
          });
        } else {
          dispatch({
            type: GET_INGREDIENTS_ERROR
          });
        }
      })
      .catch(e => {
        dispatch({
            type: GET_INGREDIENTS_ERROR
          });
    });;
    };
  }

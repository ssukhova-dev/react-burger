import { GET_INGREDIENTS_REQUEST, 
         GET_INGREDIENTS_SUCCESS, 
         GET_INGREDIENTS_ERROR,
         ADD_CURRENT_INGREDIENT,
         REMOVE_CURRENT_INGREDIENT,
         SET_CURRENT_TAB } from '../actions/burger-ingredients';

import {IngredientTypes} from '../../utils/constants'


const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,

};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_INGREDIENTS_REQUEST: {
        return {
          ...state,
          ingredientsRequest: true
        };
      }
      case GET_INGREDIENTS_SUCCESS: {
        return { ...state, ingredientsFailed: false, ingredients: action.ingredients, ingredientsRequest: false };
      }
      case GET_INGREDIENTS_ERROR: {
        return { ...state, ingredientsFailed: true, ingredientsRequest: false };
      }
    
      default: {
        return state;
      }
    }
  };


const currentIngredientInitialState = {
    currentIngredient: null,
};

export const currentIngredientReducer = (state = currentIngredientInitialState, action) => {
    switch (action.type) {
      case ADD_CURRENT_INGREDIENT:
        {
            if (!action.ingredient)
                return state; 

            return {...state, currentIngredient: action.ingredient};
        }
        case REMOVE_CURRENT_INGREDIENT:
        {
            return {...state, currentIngredient: null};
        }
      default: {
        return state;
      }
    }
  };


const tabInitialState = {
  currentTab: IngredientTypes.bun
};

export const tabReducer = (state = tabInitialState, action) => {
  switch (action.type) {
    case SET_CURRENT_TAB:
      {
          return {...state, currentTab: action.currentTab};
      }
    default: {
      return state;
    }
  }
};


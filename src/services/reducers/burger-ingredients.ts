import { GET_INGREDIENTS_REQUEST, 
         GET_INGREDIENTS_SUCCESS, 
         GET_INGREDIENTS_ERROR,
         ADD_CURRENT_INGREDIENT,
         REMOVE_CURRENT_INGREDIENT,
         SET_CURRENT_TAB,
         TIngredientActions,
         TCurrentIngredientActions,
         TCurrentTabActions } from '../actions/burger-ingredients';

import {IngredientTypes} from '../../utils/constants'
import { TIngredient } from '../../utils/types';

type TIngredientState = {
  ingredients: Array<TIngredient>,
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
} 

const initialState: TIngredientState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false,

};

export const ingredientsReducer = (state = initialState, action: TIngredientActions): TIngredientState => {
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

type TCurrentIngredientState = {
  currentIngredient: TIngredient | null,
} 

const currentIngredientInitialState: TCurrentIngredientState = {
    currentIngredient: null,
};

export const currentIngredientReducer = (state = currentIngredientInitialState, action: TCurrentIngredientActions): TCurrentIngredientState => {
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

type TTabState = {
  currentTab: string,
} 

const tabInitialState: TTabState = {
  currentTab: IngredientTypes.bun
};

export const tabReducer = (state = tabInitialState, action: TCurrentTabActions): TTabState => {
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


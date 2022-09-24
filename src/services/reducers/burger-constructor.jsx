import { 
         ADD_INGREDIENT, 
         REMOVE_INGREDIENT, 
         ADD_CURRENT_INGREDIENT,
         REMOVE_CURRENT_INGREDIENT,
         ADD_ORDER,
         SET_CURRENT_TAB } from '../actions/burger-constructor';

import {IngredientTypes} from '../../utils/constants'


const initialState = {
    cart: [],
    currentIngredient: null,
    order: null,
    currentTab: IngredientTypes.bun
}

        
export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case ADD_INGREDIENT:
        {
            if (!action.ingredient)
                return state; 

            let newCart = state.cart;


            if (action.ingredient.type === "bun") {
                const hasBun = state.cart.some((item) => item.type === "bun");

                if (hasBun) {
                    newCart = state.cart.filter((item) => item.type !== "bun")
                }  

                const new_ingredient = {...action.ingredient, count: 1};
                return {...state, cart: [...newCart, new_ingredient]};
            }



            const ingredient = state.cart.find( item => item._id === action.ingredient._id);

            if (ingredient){

                if (ingredient.count <= 0)
                    return state;

                newCart = newCart.map( (item) => {
                    if (item._id === action.ingredient._id){
                        return {...item, count: item.count + 1};

                    } else {
                        return item;
                    }
                    
                });

                return {...state, cart: newCart};
            }
            else{
                const new_ingredient = {...action.ingredient, count: 1};
                return {...state, cart: [...state.cart, new_ingredient]};
            }

            return {...state, cart: {...state.cart}};
        }
        case REMOVE_INGREDIENT:
        {
            let newCart = state.cart;

            const ingredient = state.cart.find( item => item._id === action.ingredientId);
            
            if (ingredient.count === 1) {
                newCart = newCart.filter((item) => item._id !== action.ingredientId)
            }
            else{
                newCart = newCart.map( (item) => {
                    if (item._id === action.ingredientId){
                        return {...item, count: item.count - 1};

                    } else {
                        return item;
                    }
                });
            }
            
            return {...state, cart: newCart};
        }
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
        case ADD_ORDER:
        {
            if (!action.order)
                return state; 

            return {...state, order: action.order};
        }
        case SET_CURRENT_TAB:
        {
            return {...state, currentTab: action.currentTab};
        }
        default:
            return state;
  }
} 

import { SET_INGREDIENTS, 
         ADD_INGREDIENT, 
         REMOVE_INGREDIENT, 
         ADD_CURRENT_INGREDIENT,
         REMOVE_CURRENT_INGREDIENT } from '../actions/actions';

export const rootReducer = (state, action) => {

    console.log('recieve action', action);


    switch (action.type) {

        case SET_INGREDIENTS:
            return {...state, ingredients: action.ingredients};
        
        case ADD_INGREDIENT:
        {
            if (!action.ingredient)
                return state; 

            console.log(state.cart);

            let newCart = state.cart;

            const ingredient = state.cart.find( item => item._id === action.ingredient._id);
            

            if (ingredient){

                console.log('ingredient found');

                if (ingredient.count <= 0)
                    return state;

                if (ingredient.type === "bun") {
                    const hasBun = state.cart.some((item) => item.type === "bun");

                    if (hasBun) {

                        newCart = newCart.filter((item) => item.typed !== "bun")
                    }  

                    const new_ingredient = {...action.ingredient, count: 1};
                    return {...state, cart: [...state.cart, new_ingredient]};
                }



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

            const ingredient = state.cart.find( item => item._id === action.ingredient._id);
            
            if (ingredient.count === 1) {
                newCart = newCart.filter((item) => item._id !== action.ingredient._id)
            }
            else{
                newCart = newCart.map( (item) => {
                    if (item._id === action.ingredient._id){
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
        default:
            return state;
  }
} 
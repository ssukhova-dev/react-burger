import { 
         ADD_INGREDIENT, 
         REMOVE_INGREDIENT,
         MOVE_INGREDIENTs } from '../actions/burger-constructor';


const initialState = {
    cart: [],
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

                const new_ingredient = {...action.ingredient, order: 0};
                return {...state, cart: [...newCart, new_ingredient]};
            }

            const new_ingredient = {...action.ingredient, order: state.cart.length};

            return {...state, cart: [...state.cart, new_ingredient]};
        
        }
        case REMOVE_INGREDIENT:
        {
            let newCart = state.cart;
            newCart = newCart.filter( (item) =>  ((item._id !== action.ingredient._id) || 
                                                     (item.order !== action.ingredient.order)) );
            return {...state, cart: newCart};
        }
        case MOVE_INGREDIENTs:
        {
            let newCart = state.cart;

            const dropOrder = action.dropIngredient.order;
            const dragOrder = action.dragIngredient.order;

            if (dragOrder === dropOrder)
                return state;

            newCart = newCart.map((item) => {

                if (dragOrder > dropOrder)
                {
                    if ((item._id === action.dragIngredient._id) && 
                        (item.order === dragOrder)) {
                            item.order = dropOrder;
                    } else {
                        if ((item.order >= dropOrder) && (item.order < dragOrder))
                        {
                            item.order = item.order + 1;
                        }
                    }
                }

                if (dragOrder < dropOrder)
                {
                    if ((item._id === action.dragIngredient._id) && 
                        (item.order === dragOrder)) {
                            item.order = dropOrder;
                    } else {
                        if ((item.order > dragOrder) && (item.order <= dropOrder))
                        {
                            item.order = item.order - 1;
                        }
                    }
                }

                return item;
                
            });

            return {...state, cart: [...newCart]};
        }
        default:
            return state;
  }
} 

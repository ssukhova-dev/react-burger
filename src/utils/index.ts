import { TIngredient, TOrder } from "./types";

export function getPrice(order: TOrder | null, ingredients: TIngredient[]){
    let price = 0;

    if (!order){
      return 0;
    }

    order.ingredients.forEach((ingredient_id) => {
      ingredients.forEach((ingredient) => {
        if (ingredient._id === ingredient_id) {            
          price += ingredient.price;
        }
      });
    })
    return price;
  }
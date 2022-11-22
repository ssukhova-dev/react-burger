import { TCartIngredient, TIngredient } from "../../utils/types";
import { IClearCart } from "./cart-total";

export const ADD_INGREDIENT: 'ADD_INGREDIENT' = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT: 'REMOVE_INGREDIENT' = 'REMOVE_INGREDIENT';
export const MOVE_INGREDIENTs: 'MOVE_INGREDIENTs' = 'MOVE_INGREDIENTs';

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: TIngredient;
    readonly key: string;
  }
  
  export interface IRemoveIngredient {
    readonly type: typeof REMOVE_INGREDIENT;
    ingredient: TCartIngredient;
  }
  
  export interface IMoveIngredient {
    readonly type: typeof MOVE_INGREDIENTs;
    readonly dragIngredient: TCartIngredient,
    readonly dropIngredient: TCartIngredient;
  }
  
  export type TConstructorActions = 
    | IAddIngredient
    | IRemoveIngredient
    | IMoveIngredient
    | IClearCart;
  





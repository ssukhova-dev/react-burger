import { TOrder } from "../../utils/types";

export const ADD_CURRENT_ORDER: 'ADD_CURRENT_ORDER' = 'ADD_CURRENT_ORDER';
export const REMOVE_CURRENT_ORDER: 'REMOVE_CURRENT_ORDER' = 'REMOVE_CURRENT_ORDER';

export interface IAddCurrentOrder {
    readonly type: typeof ADD_CURRENT_ORDER;
    readonly order: TOrder;
  }
  
  export interface IRemoveCurrentOrder {
    readonly type: typeof REMOVE_CURRENT_ORDER;
  }
    
  export type TCurrentOrderActions = 
  | IAddCurrentOrder
  | IRemoveCurrentOrder;
  
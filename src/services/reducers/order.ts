import { TOrder } from '../../utils/types';
import {ADD_CURRENT_ORDER, REMOVE_CURRENT_ORDER, TCurrentOrderActions} from '../actions/order';

type TCurrentOrderState = {
    currentOrder: TOrder | null,
  } 
  
  const currentOrderInitialState: TCurrentOrderState = {
    currentOrder: null,
  };
  
  export const currentOrderReducer = (state = currentOrderInitialState, action: TCurrentOrderActions): TCurrentOrderState => {
      switch (action.type) {
        case ADD_CURRENT_ORDER:
          {
              if (!action.order)
                  return state; 
  
              return {...state, currentOrder: action.order};
          }
          case REMOVE_CURRENT_ORDER:
          {
              return {...state, currentOrder: null};
          }
        default: {
          return state;
        }
      }
    };
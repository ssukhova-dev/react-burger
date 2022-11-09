
import { GET_ORDERS_REQUEST, 
         GET_ORDERS_SUCCESS, 
         GET_ORDERS_ERROR,
         OPEN_ORDER_DETAILS,
         CLOSE_ORDER_DETAILS,
         TOrderActions } from '../actions/cart-total';

type TOrderState = {
    orderId: string | null,
    ordersRequest: boolean,
    ordersFailed: boolean,
    isOrderDetailOpen: boolean
} 

const initialState: TOrderState = {
    orderId: null,
    ordersRequest: false,
    ordersFailed: false,
    isOrderDetailOpen: false
};

export const ordersReducer = (state = initialState, action: TOrderActions): TOrderState => {
    switch (action.type) {
        case GET_ORDERS_REQUEST: {
            return {
                ...state,
                ordersRequest: true
            };
        }
        case GET_ORDERS_SUCCESS: {
            return { ...state, ordersFailed: false, orderId: action.orderId, ordersRequest: false };
        }
        case GET_ORDERS_ERROR: {
            return { ...state, ordersFailed: true, ordersRequest: false };
        }
        case OPEN_ORDER_DETAILS: {
            return { ...state, isOrderDetailOpen: true };
        }
        case CLOSE_ORDER_DETAILS: {
            return { ...state, isOrderDetailOpen: false };
        }

        default: {
            return state;
        }
    }
};

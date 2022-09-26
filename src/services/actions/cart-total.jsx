
import {getOrdersData} from '../../utils/burger-api'

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR = 'GET_ORDERS_ERROR';
export const OPEN_ORDER_DETAILS = 'OPEN_ORDER_DETAILS';
export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const CLEAR_CART = 'CLEAR_CART';


function getOrdersRequest() {
  return {
    type: GET_ORDERS_REQUEST
  }
}

function getOrdersSuccess(orderId) {
  return {
    type: GET_ORDERS_SUCCESS,
    orderId: orderId
  }
}

function getOrdersError() {
  return {
    type: GET_ORDERS_ERROR
  }
}

function clearCart() {
  return {
    type: CLEAR_CART
  }
}

function openOrderDetails() {
  return {
    type: OPEN_ORDER_DETAILS
  }
}

export function getOrders(ingredients) {
    return function(dispatch) {
      dispatch(getOrdersRequest());
      getOrdersData(ingredients).then(res => {
        if (res && res.success) {
          dispatch(getOrdersSuccess( res.order.number ));
          dispatch(clearCart());
        } else {
          dispatch(getOrdersError());
        }
      }).then(() => {
        dispatch(openOrderDetails());
        })
        .catch(e => {
            dispatch(getOrdersError());
        });
    };
  }


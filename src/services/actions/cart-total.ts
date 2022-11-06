
import {getOrdersData} from '../../utils/burger-api'
import {refreshToken} from './profile'

export const GET_ORDERS_REQUEST: 'GET_ORDERS_REQUEST' = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS: 'GET_ORDERS_SUCCESS' = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR: 'GET_ORDERS_ERROR' = 'GET_ORDERS_ERROR';
export const OPEN_ORDER_DETAILS: 'OPEN_ORDER_DETAILS' = 'OPEN_ORDER_DETAILS';
export const CLOSE_ORDER_DETAILS: 'CLOSE_ORDER_DETAILS' = 'CLOSE_ORDER_DETAILS';
export const CLEAR_CART: 'CLEAR_CART' = 'CLEAR_CART';

export interface IGetOrdersRequest {
  readonly type: typeof GET_ORDERS_REQUEST;
}

export interface IGetOrdersSuccess {
  readonly type: typeof GET_ORDERS_SUCCESS;
  readonly orderId: string;
}

export interface IGetOrdersError {
  readonly type: typeof GET_ORDERS_ERROR;
}

export interface IClearCart {
  readonly type: typeof CLEAR_CART;
}

export interface IOpenOrderDetails {
  readonly type: typeof OPEN_ORDER_DETAILS;
}

function getOrdersRequest(): IGetOrdersRequest {
  return {
    type: GET_ORDERS_REQUEST
  }
}

function getOrdersSuccess(orderId: string): IGetOrdersSuccess {
  return {
    type: GET_ORDERS_SUCCESS,
    orderId
  }
}

function getOrdersError(): IGetOrdersError {
  return {
    type: GET_ORDERS_ERROR
  }
}

function clearCart(): IClearCart {
  return {
    type: CLEAR_CART
  }
}

function openOrderDetails(): IOpenOrderDetails {
  return {
    type: OPEN_ORDER_DETAILS
  }
}

export function getOrders(ingredients: Array<string>) {
  //@ts-ignore  
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
          if (e.message === 'jwt expired') {
              dispatch(refreshToken());
          } else {
              dispatch(getOrdersError());
          }
        });
    };
  }

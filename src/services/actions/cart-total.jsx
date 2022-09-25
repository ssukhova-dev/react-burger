
import {getOrdersData} from '../../utils/burger-api'

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_ERROR = 'GET_ORDERS_ERROR';
export const OPEN_ORDER_DETAILS = 'OPEN_ORDER_DETAILS';
export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const CLEAR_CART = 'CLEAR_CART';



export function getOrders(ingredients) {
    return function(dispatch) {
      dispatch({
        type: GET_ORDERS_REQUEST
      });
      getOrdersData(ingredients).then(res => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDERS_SUCCESS,
            orderId: res.order.number
          });
          dispatch({
            type: CLEAR_CART
          });
        } else {
          dispatch({
            type: GET_ORDERS_ERROR
          });
        }
      }).then(() => {
        dispatch({
            type: OPEN_ORDER_DETAILS
          });
        })
        .catch(e => {
            dispatch({
                type: GET_ORDERS_ERROR
              });
        });
    };
  }


import { TOrder } from '../../utils/types';
import {WS_CONNECT, WS_CONNECTING, WS_DISCONNECT, 
        ON_OPEN, ON_CLOSE, ON_ERROR, ON_MESSAGE, TOrdersWsActions } from '../actions/socket';



type TWsOrdersState = {
  wsConnected: boolean;
  loading: boolean;
  error?: Event;

  feedOrders: Array<TOrder>;
  total: number;
  totalToday: number;
} 

const initialState: TWsOrdersState = {
  wsConnected: false,
  loading: false,

  feedOrders: [],
  total: 0,
  totalToday: 0,
}
      
export const wsOrdersReducer = (state = initialState, action: TOrdersWsActions): TWsOrdersState => {

  switch (action.type) {
    case WS_CONNECT:
      return {
        ...state,
        wsConnected: true
      };

    case ON_ERROR:
      return {
        ...state,
        wsConnected: false
      };

    case ON_CLOSE:
      return {
        ...state,
        wsConnected: false
      };

    case ON_MESSAGE:

      return {
        ...state,
        error: undefined,
        feedOrders: action.payload.orders ? action.payload.orders : state.feedOrders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        loading: false,
      };

    default:
      return state;
  }
};
import { TOrder } from '../../utils/types';
import {WS_CONNECT_PROFILE, WS_CONNECTING_PROFILE, WS_DISCONNECT_PROFILE, 
        ON_OPEN_PROFILE, ON_CLOSE_PROFILE, ON_ERROR_PROFILE, 
        ON_MESSAGE_PROFILE, TProfileOrdersWsActions } from '../actions/profile-socket';



type TWsProfileOrdersState = {
  wsConnected: boolean;
  loading: boolean;
  error?: Event;

  orders: Array<TOrder>;
  total: number;
  totalToday: number;
} 

const initialState: TWsProfileOrdersState = {
  wsConnected: false,
  loading: false,

  orders: [],
  total: 0,
  totalToday: 0,
}
      
export const wsProfileOrdersReducer = (state = initialState, action: TProfileOrdersWsActions): TWsProfileOrdersState => {

  switch (action.type) {
    case WS_CONNECT_PROFILE:
      return {
        ...state,
        wsConnected: true
      };

    case ON_ERROR_PROFILE:
      return {
        ...state,
        wsConnected: false
      };

    case ON_CLOSE_PROFILE:
      return {
        ...state,
        wsConnected: false
      };

    case ON_MESSAGE_PROFILE:

      return {
        ...state,
        error: undefined,
        orders: action.payload.orders ? action.payload.orders : state.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        loading: false,
      };

    default:
      return state;
  }
};
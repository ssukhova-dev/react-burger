import {WS_CONNECT, WS_CONNECTING, WS_DISCONNECT, 
        ON_OPEN, ON_CLOSE, ON_ERROR, ON_MESSAGE, TWsActions } from '../actions/socket';



type TWsOrdersState = {
  wsConnected: boolean;
  messages: Array<string>;
} 

const initialState: TWsOrdersState = {
  wsConnected: false,
  messages: [],
}
      
export const wsOrdersReducer = (state = initialState, action: TWsActions): TWsOrdersState => {

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

  /*  case ON_MESSAGE:
      return {
        ...state,
        messages: state.messages.length
          ? [...state.messages, { ...action.payload, timestamp: new Date().getTime() / 1000 }]
          : [{ ...action.payload, timestamp: new Date().getTime() / 1000 }]
      };*/


    default:
      return state;
  }
};
import { Middleware } from "redux";
import { RootState } from "../types";

export type TWsActions = {
    wsConnect: string;
    wsConnecting: string;
    wsDisconnect: string;
    wsSendMessage: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
}


/*
export const socketMiddleware = (wsActions: TWsActions): Middleware<{}, RootState> => {
    return (store) => {

       // let socket = WebSocket | null = null;
      //  let url = '';
        
        return (next) => (action) =>{

        }
    }
}*/

export const socketMiddleware = (wsActions: TWsActions): Middleware<{}, RootState> => {
    return (store) => (next) => (action) => {
      const { dispatch, getState } = store;
      const state = getState(); // has RootState type
      const { type, payload } = action;
      // ...
      next(action);
    }
  }
import { Middleware } from "redux";
import { RootState } from "../types";

 type TWsActions = {
    wsConnect: string;
    wsConnecting: string;
    wsDisconnect: string;
    wsSendMessage?: string;
    onOpen: string;
    onClose: string;
    onError: string;
    onMessage: string;
}


export const socketMiddleware = (wsActions: TWsActions): Middleware<{}, RootState> => {

    return (store) =>
    {

        let socket: WebSocket | null = null;
        //let socket = null;
        let url = '';
        
        return (next) => (action) => {
            const { dispatch, getState } = store;
            const state = getState(); // has RootState type
            const { type, payload } = action;
            const { wsConnect, wsConnecting, wsDisconnect, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;
        

            if (type === wsConnect) {             
                url = payload;
                socket = new WebSocket(url);
                dispatch({ type: wsConnecting});
            }

            if (socket) {

                if (type === wsDisconnect) {
                    socket.close(); 
                    dispatch({ type: onClose});
                }

                socket.onmessage = (event) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: onMessage, payload: parsedData });

                    //const { success, ...restParsedData } = parsedData;
                    //dispatch({ type: onMessage, payload: restParsedData });
                };

                socket.onerror = (error) => {
                    dispatch({ type: onError, error: JSON.stringify(error) });
                };

                socket.onclose = (event) => {
                    if (event.code === 1000) {
                        dispatch({ type: onClose, payload: event });
                    }
                    else {
                        dispatch({ type: onError, error: event.code.toString()});
                    }
                };

                socket.onopen = (event) => {
                    dispatch({ type: onOpen, payload: event });
                };
        
                if (wsSendMessage && type === wsSendMessage) {
                    socket.send(JSON.stringify(payload));
                }
            }


            next(action);
        }
    }
  }
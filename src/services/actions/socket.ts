export const WS_CONNECT: 'WS_CONNECT' = 'WS_CONNECT';
export const WS_CONNECTING: 'WS_CONNECTING' = 'WS_CONNECTING';
export const WS_DISCONNECT: 'WS_DISCONNECT' = 'WS_DISCONNECT';
export const ON_OPEN: 'ON_OPEN' = 'ON_OPEN';
export const ON_CLOSE: 'ON_CLOSE' = 'ON_CLOSE';
export const ON_ERROR: 'ON_ERROR' = 'ON_ERROR';
export const ON_MESSAGE: 'ON_MESSAGE' = 'ON_MESSAGE';


export interface IWsConnect {
    readonly type: typeof WS_CONNECT;
}

export interface IWsConnecting {
    readonly type: typeof WS_CONNECTING;
}

export interface IWsDisconnect {
    readonly type: typeof WS_DISCONNECT;
}

export interface IOnOpen {
    readonly type: typeof ON_OPEN;
}

export interface IOnClose {
    readonly type: typeof ON_CLOSE;
}

export interface IOnError{
    readonly type: typeof ON_ERROR;
}

export interface IOnMessage{
    readonly type: typeof ON_MESSAGE;
}

export type TOrdersWsActions = 
    | IWsConnect
    | IWsConnecting
    | IWsDisconnect
    | IOnOpen
    | IOnClose
    | IOnError
    | IOnMessage;




export const ordersWsActions = {
    wsConnect: WS_CONNECT,
    wsConnecting: WS_CONNECTING,
    wsDisconnect: WS_DISCONNECT,
    onOpen: ON_OPEN,
    onClose: ON_CLOSE,
    onError: ON_ERROR,
    onMessage: ON_MESSAGE
};
import { TOrder } from "../../utils/types";

export const WS_CONNECT_PROFILE: 'WS_CONNECT_PROFILE' = 'WS_CONNECT_PROFILE';
export const WS_CONNECTING_PROFILE: 'WS_CONNECTING_PROFILE' = 'WS_CONNECTING_PROFILE';
export const WS_DISCONNECT_PROFILE: 'WS_DISCONNECT_PROFILE' = 'WS_DISCONNECT_PROFILE';
export const ON_OPEN_PROFILE: 'ON_OPEN_PROFILE' = 'ON_OPEN_PROFILE';
export const ON_CLOSE_PROFILE: 'ON_CLOSE_PROFILE' = 'ON_CLOSE_PROFILE';
export const ON_ERROR_PROFILE: 'ON_ERROR_PROFILE' = 'ON_ERROR_PROFILE';
export const ON_MESSAGE_PROFILE: 'ON_MESSAGE_PROFILE' = 'ON_MESSAGE_PROFILE';


export interface IWsConnectProfile {
    readonly type: typeof WS_CONNECT_PROFILE;
    readonly payload: string; 
}

export interface IWsConnectingProfile {
    readonly type: typeof WS_CONNECTING_PROFILE;
}

export interface IWsDisconnectProfile {
    readonly type: typeof WS_DISCONNECT_PROFILE;
}

export interface IOnOpenProfile {
    readonly type: typeof ON_OPEN_PROFILE;
}

export interface IOnCloseProfile {
    readonly type: typeof ON_CLOSE_PROFILE;
}

export interface IOnErrorProfile{
    readonly type: typeof ON_ERROR_PROFILE;
    readonly payload: Event;
}

export interface IOnMessageProfile{
    readonly type: typeof ON_MESSAGE_PROFILE;
    readonly payload: { success: boolean;
                        orders: TOrder[];
                        total: number;
                        totalToday: number;}
}

export type TProfileOrdersWsActions = 
    | IWsConnectProfile
    | IWsConnectingProfile
    | IWsDisconnectProfile
    | IOnOpenProfile
    | IOnCloseProfile
    | IOnErrorProfile
    | IOnMessageProfile;


export function wsProfileOrdersConnect(url: string): IWsConnectProfile {
    return {
        type: WS_CONNECT_PROFILE,
        payload: url,
    }
}

export function wsProfileOrdersDisconnect(): IWsDisconnectProfile {
    return {
        type: WS_DISCONNECT_PROFILE,
    }
}


export const profileOrdersWsActions = {
    wsConnect: WS_CONNECT_PROFILE,
    wsConnecting: WS_CONNECTING_PROFILE,
    wsDisconnect: WS_DISCONNECT_PROFILE,
    onOpen: ON_OPEN_PROFILE,
    onClose: ON_CLOSE_PROFILE,
    onError: ON_ERROR_PROFILE,
    onMessage: ON_MESSAGE_PROFILE
};
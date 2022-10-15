import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
        RESET_PASSWORD} from '../actions/login';

import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR} from '../actions/logout';
import {REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS} from '../actions/register';


const initialState = {
    accessToken: undefined,
    refreshToken: undefined,
   
    registerRequest: false,
    registerFailed: false,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,
};


export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loginRequest: true };
        }
        case LOGIN_SUCCESS: {
            return { ...state, accessToken: action.accessToken, refreshToken: action.refreshToken, 
                loginRequest: false, loginFailed: false };
        }
        case LOGIN_ERROR: {
            return { ...state, loginFailed: true, loginRequest: false };
        }
        case LOGOUT_REQUEST: {
            return { ...state, logoutRequest: true };
        }
        case LOGOUT_SUCCESS: {
            return { ...state, accessToken: undefined, refreshToken: undefined, 
                logoutRequest: false, logoutFailed: false };
        }
        case LOGOUT_ERROR: {
            return { ...state, logoutFailed: true, logoutRequest: false };
        }
        case RESET_PASSWORD: {
            return { ...state, accessToken: undefined, refreshToken: undefined };
        }
        case REGISTER_REQUEST: {
            return { ...state, registerRequest: true };
        }
        case REGISTER_SUCCESS: {
            return { ...state, accessToken: action.accessToken, refreshToken: action.refreshToken, 
                               registerRequest: false, registerFailed: false };
        }
        case REGISTER_ERROR: {
            return { ...state, registerFailed: true, registerRequest: false };
        }
        default: {
            return state;
        }
    }
}
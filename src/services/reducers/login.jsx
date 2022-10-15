import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR,
        USER_LOGOUT,
        RESET_PASSWORD} from '../actions/login';

import {REGISTER_REQUEST,
        REGISTER_ERROR,
        REGISTER_SUCCESS} from '../actions/register';



const initialState = {
    accessToken: undefined,
    refreshToken: undefined,
   
    registerRequest: false,
    registerFailed: false,

    loginRequest: false,
    loginFailed: false,
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
        case USER_LOGOUT: {
            return { ...state, token: undefined };
        }
        case RESET_PASSWORD: {
            return { ...state, token: undefined };
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
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/login';

import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR} from '../actions/logout';
import {REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS} from '../actions/register';
import {GET_USER_REQUEST, GET_USER_ERROR, GET_USER_SUCCESS,
        SAVE_USER_REQUEST, SAVE_USER_ERROR, SAVE_USER_SUCCESS,
        REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_ERROR } from '../actions/profile';

import {RESET_PSW_REQUEST, RESET_PSW_SUCCESS, RESET_PSW_ERROR,
        FORGOT_PSW_REQUEST, FORGOT_PSW_SUCCESS, FORGOT_PSW_ERROR } from '../actions/password';



const initialState = {
    accessToken: undefined,
    refreshToken: undefined,

    user: { name: '', email: '', password: ''},
   
    registerRequest: false,
    registerFailed: false,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    saveUserRequest: false,
    saveUserFailed: false,

    refreshTokenRequest: false,
    refreshTokenFailed: false,

    resetPswRequest: false,
    resetPswSuccess: false,
    resetPswFailed: false,

    forgotPswRequest: false,
    forgotPswSuccess: false,
    forgotPswFailed: false,
};


export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, loginRequest: true };
        }
        case LOGIN_SUCCESS: {
        
            return { ...state, accessToken: action.accessToken, refreshToken: action.refreshToken, 
                loginRequest: false, loginFailed: false,
                user: {...state.user, name: action.user ? action.user.name : '', email: action.user ? action.user.email : '' } };
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
        case REGISTER_REQUEST: {
            return { ...state, registerRequest: true };
        }
        case REGISTER_SUCCESS: {
            return { ...state, accessToken: action.accessToken, refreshToken: action.refreshToken, 
                               registerRequest: false, registerFailed: false,
                               user: {...state.user, name: action.user.name, email: action.user.email } };
        }
        case REGISTER_ERROR: {
            return { ...state, registerFailed: true, registerRequest: false };
        }
        case GET_USER_REQUEST: {
            return { ...state, getUserRequest: true, getUserFailed: false }
        }
        case GET_USER_SUCCESS: {
            return { ...state, getUserRequest: false, 
                user: {...state.user, name: action.user.name, email: action.user.email }}
        }
        case GET_USER_ERROR: {
            return { ...state, getUserRequest: false, getUserFailed: true }
        }
        case SAVE_USER_REQUEST: {
            return { ...state, saveUserRequest: true, saveUserFailed: false }
        }
        case SAVE_USER_SUCCESS: {
            return { ...state, saveUserRequest: false, 
                user: {...state.user, name: action.user.name, email: action.user.email }}
        }
        case SAVE_USER_ERROR: {
            return { ...state, saveUserRequest: false, saveUserFailed: true }
        }
        case REFRESH_TOKEN_REQUEST: {
            return { ...state, refreshTokenRequest: true };
        }
        case REFRESH_TOKEN_SUCCESS: {
            return { ...state, accessToken: action.accessToken, refreshToken: action.refreshToken, 
                refreshTokenRequest: false, refreshTokenFailed: false };
        }
        case REFRESH_TOKEN_ERROR: {
            return { ...state, refreshTokenFailed: true, refreshTokenRequest: false };
        }
        case RESET_PSW_REQUEST: {
            return { ...state, accessToken: undefined, refreshToken: undefined, resetPswRequest: true, resetPswSuccess: false, forgotPswSuccess: false };
        }
        case RESET_PSW_SUCCESS: {
            return { ...state, resetPswRequest: false, resetPswFailed: false, resetPswSuccess: true };
        }
        case RESET_PSW_ERROR: {
            return { ...state, resetPswFailed: true, resetPswRequest: false, resetPswSuccess: false  };
        }
        case FORGOT_PSW_REQUEST: {
            return { ...state, forgotPswRequest: true, forgotPswSuccess: false };
        }
        case FORGOT_PSW_SUCCESS: {
            return { ...state, forgotPswRequest: false, forgotPswFailed: false, forgotPswSuccess: true, resetPswSuccess: false };
        }
        case FORGOT_PSW_ERROR: {
            return { ...state, forgotPswFailed: true, forgotPswRequest: false, forgotPswSuccess: false };
        }
        default: {
            return state;
        }
    }
}
import {USER_LOGIN,
        USER_LOGOUT,
        RESET_PASSWORD} from '../actions/login';

import {REGISTER_REQUEST,
        REGISTER_ERROR,
        REGISTER_SUCCESS} from '../actions/register';


const initialState = {
    token: undefined,
   
    registerRequest: false,
    registerFailed: false,
};



export const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case USER_LOGIN: {
            return { ...state, token: action.token };
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
            return { ...state, token: action.token, registerRequest: false, registerFailed: false };
        }
        case REGISTER_ERROR: {
            return { ...state, registerFailed: true, registerRequest: false };
        }
        default: {
            return state;
        }
    }
}
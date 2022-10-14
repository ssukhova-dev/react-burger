import {USER_LOGIN,
        USER_LOGOUT,
        RESET_PASSWORD} from '../actions/user';


const initialState = {
    token: undefined
   
};


export const userReducer = (state = initialState, action) => {

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
        default: {
            return state;
        }
    }
}
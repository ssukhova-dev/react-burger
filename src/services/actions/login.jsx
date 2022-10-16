import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'

export const USER_LOGOUT = 'USER_LOGOUT';
export const RESET_PASSWORD = 'RESET_PASSWORD;'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const isLoggedInSelector = (store) => !!store.login.accessToken;


function loginRequest() {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccess(accessToken, refreshToken, user) {
    return {
        type: LOGIN_SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user
    }
}

function loginError() {
  return {
    type: LOGIN_ERROR
  }
}


export function loginThunk(data) {
    return function(dispatch) {
      dispatch(loginRequest());

      api.login(data).then(res => {
        if (res && res.success) {
            JsCookie.set(Token.access, res.accessToken);
            JsCookie.set(Token.refresh, res.refreshToken);
            dispatch(loginSuccess(res.accessToken, res.refreshToken, res.user))
        } else {
            dispatch(loginError());
        }
      })
      .catch(e => {
            dispatch(loginError());
    });;
    };
}


export const checkSessionThunk = () => (dispatch) => {

    const accessToken = JsCookie.get(Token.access);
    const refreshToken = JsCookie.get(Token.refresh);
    dispatch(loginSuccess(accessToken, refreshToken));
}


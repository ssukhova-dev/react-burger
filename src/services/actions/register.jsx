import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';



function registerRequest() {
  return {
    type: REGISTER_REQUEST
  }
}

export function registerSuccess(accessToken, refreshToken, user) {
    return {
        type: REGISTER_SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user
    }
}

function registerError() {
  return {
    type: REGISTER_ERROR
  }
}

export function registerThunk(data) {
    return function(dispatch) {
      dispatch(registerRequest());

      api.register(data).then(res => {
        if (res && res.success) {
            JsCookie.set(Token.access, res.accessToken);
            JsCookie.set(Token.refresh, res.refreshToken);
            dispatch(registerSuccess(res.accessToken, res.refreshToken, res.user))
        } else {
            dispatch(registerError());
        }
      })
      .catch(e => {
            dispatch(registerError());
    });;
    };
  }

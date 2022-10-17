import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

export const SAVE_USER_REQUEST = 'SAVE_USER_REQUEST';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_ERROR = 'SAVE_USER_ERROR';

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_ERROR = 'REFRESH_TOKEN_ERROR';


function getUserRequest() {
  return {
    type: GET_USER_REQUEST
  }
}

function getUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        user: user
    }
}

function getUserError() {
  return {
    type: GET_USER_ERROR
  }
}

function refreshTokenRequest() {
    return {
      type: REFRESH_TOKEN_REQUEST
    }
  }
  
  function refreshTokenSuccess(accessToken, refreshToken) {
      return {
          type: REFRESH_TOKEN_SUCCESS,
          accessToken: accessToken,
          refreshToken: refreshToken,
      }
  }
  
  function refreshTokenError() {
    return {
      type: REFRESH_TOKEN_ERROR
    }
  }

export function refreshToken() {
    return function(dispatch) {
      dispatch(refreshTokenRequest());

      api.token().then(res => {
        if (res && res.success) {

            JsCookie.remove(Token.access);
            JsCookie.remove(Token.refresh);

            JsCookie.set(Token.access, res.accessToken);
            JsCookie.set(Token.refresh, res.refreshToken);
          
            dispatch(refreshTokenSuccess(res.accessToken, res.refreshToken))
        } else {
            dispatch(refreshTokenError());
        }
      })
      .catch(e => {
            dispatch(refreshTokenError());//e.message
       }
    );;
    };
}

export function getUser(data) {
    return function(dispatch) {
      dispatch(getUserRequest());

      api.getUser().then(res => {
        if (res && res.success) {
            dispatch(getUserSuccess(res.user))
        } else {
            dispatch(getUserError());
        }
      })
      .catch(e => {
        if (e.message === 'jwt expired') {
            dispatch(refreshToken());
        } else {
            dispatch(getUserError());//e.message
        }
    });;
    };
  }


  function saveUserRequest() {
    return {
      type: SAVE_USER_REQUEST
    }
  }
  
  function saveUserSuccess(user) {
      return {
          type: SAVE_USER_SUCCESS,
          user: user
      }
  }
  
  function saveUserError() {
    return {
      type: SAVE_USER_ERROR
    }
  }

  export function saveUserThunk(data) {
    return function(dispatch) {
      dispatch(saveUserRequest());

      api.updateUser(data).then(res => {
        if (res && res.success) {
            dispatch(saveUserSuccess(res.user))
        } else {
            dispatch(saveUserError());
        }
      })
      .catch(e => {
            dispatch(saveUserError());
    });;
    };
}
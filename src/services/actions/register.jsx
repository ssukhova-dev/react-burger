import JsCookie from "js-cookie"
import {userLogin} from "./login"

import * as api from '../../utils/burger-api'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';



function registerRequest() {
  return {
    type: REGISTER_REQUEST
  }
}

export function registerSuccess(token) {
    return {
        type: REGISTER_SUCCESS,
        token: token
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
            const accessToken = res.accessToken; 
            JsCookie.set('userId', accessToken);
            dispatch(registerSuccess(accessToken))
        } else {
            dispatch(registerError());
        }
      })
      .catch(e => {
            dispatch(registerError());
    });;
    };
  }

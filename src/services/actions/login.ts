import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'
import { TUser } from "../../utils/types";

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export const isLoggedInSelector = (store: any) => !!store.login.accessToken;

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: string;
}

export interface ILoginError {
  readonly type: typeof LOGIN_ERROR;
}

function loginRequest(): ILoginRequest {
  return {
    type: LOGIN_REQUEST
  }
}

function loginSuccess(accessToken: string, refreshToken: string, user: string): ILoginSuccess {
    return {
        type: LOGIN_SUCCESS,
        accessToken,
        refreshToken,
        user
    }
}

function loginError(): ILoginError {
  return {
    type: LOGIN_ERROR
  }
}


export function loginThunk(data: Omit<TUser, 'name'>) {
  //@ts-ignore
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

//@ts-ignore
export const checkSessionThunk = () => (dispatch) => {

    const accessToken = JsCookie.get(Token.access)!;
    const refreshToken = JsCookie.get(Token.refresh)!;
    dispatch(loginSuccess(accessToken, refreshToken, ''));
}



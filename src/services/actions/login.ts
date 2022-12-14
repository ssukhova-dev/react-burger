import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'
import { TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const LOGIN_REQUEST: 'LOGIN_REQUEST' = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS: 'LOGIN_SUCCESS' = 'LOGIN_SUCCESS';
export const LOGIN_ERROR: 'LOGIN_ERROR' = 'LOGIN_ERROR';

export const isLoggedInSelector = (store: { login: { accessToken: string | undefined } }) => !!store.login.accessToken;

export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: TUser;
}

export interface ILoginError {
  readonly type: typeof LOGIN_ERROR;
}

export type TLoginActions = 
  | ILoginRequest
  | ILoginSuccess
  | ILoginError;

function loginRequest(): ILoginRequest {
  return {
    type: LOGIN_REQUEST
  }
}

export function loginSuccess(accessToken: string, refreshToken: string, user: TUser): ILoginSuccess {
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

export const loginThunk = (data: Omit<TUser, 'name'>): AppThunk => (dispatch: AppDispatch) =>  {

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

 


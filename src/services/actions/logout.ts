import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'
import { AppDispatch, AppThunk } from "../types";

export const LOGOUT_REQUEST: 'LOGOUT_REQUEST' = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS: 'LOGOUT_SUCCESS' = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR: 'LOGOUT_ERROR' = 'LOGOUT_ERROR';

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutError {
  readonly type: typeof LOGOUT_ERROR;
}

export type TLogoutActions = 
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutError;

function logoutRequest(): ILogoutRequest {
  return {
    type: LOGOUT_REQUEST
  }
}

export function logoutSuccess(): ILogoutSuccess {
    return {
        type: LOGOUT_SUCCESS
    }
}

function logoutError(): ILogoutError {
  return {
    type: LOGOUT_ERROR
  }
}

export const logoutThunk = (): AppThunk => (dispatch: AppDispatch) =>  {

      dispatch(logoutRequest());

      const refreshToken = JsCookie.get(Token.refresh)!;

      api.logout(refreshToken).then(res => {
        if (res && res.success) {
            JsCookie.remove(Token.access);
            JsCookie.remove(Token.refresh);
            dispatch(logoutSuccess())
        } else {
            dispatch(logoutError());
        }
      })
      .catch(e => {
            dispatch(logoutError());
    });;
};




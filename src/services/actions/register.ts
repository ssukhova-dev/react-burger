import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'
import { TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS';
export const REGISTER_ERROR: 'REGISTER_ERROR' = 'REGISTER_ERROR';

export interface IRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly user: TUser;
}

export interface IRegisterError {
  readonly type: typeof REGISTER_ERROR;
}

export type TRegisterActions = 
  | IRegisterRequest
  | IRegisterSuccess
  | IRegisterError;

function registerRequest(): IRegisterRequest {
  return {
    type: REGISTER_REQUEST
  }
}

export function registerSuccess(accessToken: string, refreshToken: string, user: TUser): IRegisterSuccess {
    return {
        type: REGISTER_SUCCESS,
        accessToken: accessToken,
        refreshToken: refreshToken,
        user: user
    }
}

function registerError(): IRegisterError {
  return {
    type: REGISTER_ERROR
  }
}

export const registerThunk: AppThunk = (data: TUser) => (dispatch: AppDispatch) =>  {
 
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
    });
};


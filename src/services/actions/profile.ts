import JsCookie from "js-cookie"

import * as api from '../../utils/burger-api'

import {Token} from '../../utils/constants'
import { TUser } from "../../utils/types";
import { AppDispatch, AppThunk } from "../types";

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_ERROR: 'GET_USER_ERROR' = 'GET_USER_ERROR';

export const SAVE_USER_REQUEST: 'SAVE_USER_REQUEST' = 'SAVE_USER_REQUEST';
export const SAVE_USER_SUCCESS: 'SAVE_USER_SUCCESS' = 'SAVE_USER_SUCCESS';
export const SAVE_USER_ERROR: 'SAVE_USER_ERROR' = 'SAVE_USER_ERROR';

export const REFRESH_TOKEN_REQUEST: 'REFRESH_TOKEN_REQUEST' = 'REFRESH_TOKEN_REQUEST';
export const REFRESH_TOKEN_SUCCESS: 'REFRESH_TOKEN_SUCCESS' = 'REFRESH_TOKEN_SUCCESS';
export const REFRESH_TOKEN_ERROR: 'REFRESH_TOKEN_ERROR' = 'REFRESH_TOKEN_ERROR';

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccess {
  readonly type: typeof GET_USER_SUCCESS;
  readonly user: TUser;
}

export interface IGetUserError {
  readonly type: typeof GET_USER_ERROR;
}

export interface IRefreshTokenRequest {
  readonly type: typeof REFRESH_TOKEN_REQUEST;
}

export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
  readonly accessToken: string;
  readonly refreshToken: string;
}

export interface IRefreshTokenError {
  readonly type: typeof REFRESH_TOKEN_ERROR;
}

function getUserRequest(): IGetUserRequest {
  return {
    type: GET_USER_REQUEST
  }
}

function getUserSuccess(user: TUser): IGetUserSuccess {
    return {
        type: GET_USER_SUCCESS,
        user: user
    }
}

function getUserError(): IGetUserError {
  return {
    type: GET_USER_ERROR
  }
}

function refreshTokenRequest(): IRefreshTokenRequest {
    return {
      type: REFRESH_TOKEN_REQUEST
    }
  }
  
  function refreshTokenSuccess(accessToken: string, refreshToken: string): IRefreshTokenSuccess {
      return {
          type: REFRESH_TOKEN_SUCCESS,
          accessToken: accessToken,
          refreshToken: refreshToken,
      }
  }
  
  function refreshTokenError(): IRefreshTokenError {
    return {
      type: REFRESH_TOKEN_ERROR
    }
  }

export const refreshToken: AppThunk = () => (dispatch: AppDispatch) =>  {
 
      dispatch(refreshTokenRequest());

      const refreshToken = JsCookie.get(Token.refresh)!;

      api.token(refreshToken).then(res => {
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
    );
};

export const getUser: AppThunk = () => (dispatch: AppDispatch) =>  {
 
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



  export interface ISaveUserRequest {
    readonly type: typeof SAVE_USER_REQUEST;
  }
  
  export interface ISaveUserSuccess {
    readonly type: typeof SAVE_USER_SUCCESS;
    readonly user: TUser;
  }
  
  export interface ISaveUserError {
    readonly type: typeof SAVE_USER_ERROR;
  }

  function saveUserRequest(): ISaveUserRequest {
    return {
      type: SAVE_USER_REQUEST
    }
  }
  
  function saveUserSuccess(user: TUser): ISaveUserSuccess {
      return {
          type: SAVE_USER_SUCCESS,
          user: user
      }
  }
  
  function saveUserError(): ISaveUserError {
    return {
      type: SAVE_USER_ERROR
    }
  }

  export const saveUserThunk: AppThunk = (data: TUser) => (dispatch: AppDispatch) =>  {
 
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


export type TProfileActions = 
  | IGetUserRequest
  | IGetUserSuccess
  | IGetUserError
  | IRefreshTokenRequest
  | IRefreshTokenSuccess
  | IRefreshTokenError
  | ISaveUserRequest
  | ISaveUserSuccess
  | ISaveUserError;


import * as api from '../../utils/burger-api'

export const RESET_PSW_REQUEST: 'RESET_PSW_REQUEST' = 'RESET_PSW_REQUEST';
export const RESET_PSW_SUCCESS: 'RESET_PSW_SUCCESS' = 'RESET_PSW_SUCCESS';
export const RESET_PSW_ERROR: 'RESET_PSW_ERROR' = 'RESET_PSW_ERROR';
export const FORGOT_PSW_REQUEST: 'FORGOT_PSW_REQUEST' = 'FORGOT_PSW_REQUEST';
export const FORGOT_PSW_SUCCESS: 'FORGOT_PSW_SUCCESS' = 'FORGOT_PSW_SUCCESS';
export const FORGOT_PSW_ERROR: 'FORGOT_PSW_ERROR' = 'FORGOT_PSW_ERROR';

export interface IResetPasswordRequest {
  readonly type: typeof RESET_PSW_REQUEST;
}

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PSW_SUCCESS;
}

export interface IResetPasswordError {
  readonly type: typeof RESET_PSW_ERROR;
}

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PSW_REQUEST;
}

export interface IforgotPasswordSuccess {
  readonly type: typeof FORGOT_PSW_SUCCESS;
}

export interface IForgotPasswordError {
  readonly type: typeof FORGOT_PSW_ERROR;
}

function resetPasswordRequest(): IResetPasswordRequest {
    return {
      type: RESET_PSW_REQUEST
    }
  }
  
  function resetPasswordSuccess(): IResetPasswordSuccess {
      return {
          type: RESET_PSW_SUCCESS
      }
  }
  
  function resetPasswordError(): IResetPasswordError {
    return {
      type: RESET_PSW_ERROR
    }
  }

  function forgotPasswordRequest(): IForgotPasswordRequest {
    return {
      type: FORGOT_PSW_REQUEST
    }
  }
  
  function forgotPasswordSuccess(): IforgotPasswordSuccess {
      return {
          type: FORGOT_PSW_SUCCESS
      }
  }
  
  function forgotPasswordError(): IForgotPasswordError {
    return {
      type: FORGOT_PSW_ERROR
    }
  }

export function resetPasswordThunk(data: {password: string, token: string}) {
  //@ts-ignore
    return function(dispatch) {
        dispatch(resetPasswordRequest());
  
        api.pswReset(data).then(res => {
          if (res && res.success) {
              dispatch(resetPasswordSuccess())
          } else {
              dispatch(resetPasswordError());
          }
        })
        .catch(e => {
              dispatch(resetPasswordError());
      });;
      };
};

export function forgotPasswordThunk(data: {email: string}) {
   //@ts-ignore
    return function(dispatch) {     
        dispatch(forgotPasswordRequest());

        api.pswForgot(data).then(res => {
          if (res && res.success) {
              dispatch(forgotPasswordSuccess())
          } else {
              dispatch(forgotPasswordError());
          }
        })
        .catch(e => {
              dispatch(forgotPasswordError());
      });;
      };
};



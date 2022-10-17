import * as api from '../../utils/burger-api'

export const RESET_PSW_REQUEST = 'RESET_PSW_REQUEST';
export const RESET_PSW_SUCCESS = 'RESET_PSW_SUCCESS';
export const RESET_PSW_ERROR = 'RESET_PSW_ERROR';
export const FORGOT_PSW_REQUEST = 'FORGOT_PSW_REQUEST';
export const FORGOT_PSW_SUCCESS = 'FORGOT_PSW_SUCCESS';
export const FORGOT_PSW_ERROR = 'FORGOT_PSW_ERROR';


function resetPasswordRequest() {
    return {
      type: RESET_PSW_REQUEST
    }
  }
  
  function resetPasswordSuccess() {
      return {
          type: RESET_PSW_SUCCESS
      }
  }
  
  function resetPasswordError() {
    return {
      type: RESET_PSW_ERROR
    }
  }

  function forgotPasswordRequest() {
    return {
      type: FORGOT_PSW_REQUEST
    }
  }
  
  function forgotPasswordSuccess() {
      return {
          type: FORGOT_PSW_SUCCESS
      }
  }
  
  function forgotPasswordError() {
    return {
      type: FORGOT_PSW_ERROR
    }
  }

export function resetPasswordThunk(data) {
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

export function forgotPasswordThunk(data) {
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



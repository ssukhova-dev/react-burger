import {loginReducer} from './login'
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, TLoginActions } from '../actions/login';

import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR, TLogoutActions} from '../actions/logout';
import {REGISTER_REQUEST, REGISTER_ERROR, REGISTER_SUCCESS, TRegisterActions} from '../actions/register';
import {GET_USER_REQUEST, GET_USER_ERROR, GET_USER_SUCCESS,
        SAVE_USER_REQUEST, SAVE_USER_ERROR, SAVE_USER_SUCCESS,
        REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_ERROR, TProfileActions } from '../actions/profile';

import {RESET_PSW_REQUEST, RESET_PSW_SUCCESS, RESET_PSW_ERROR,
        FORGOT_PSW_REQUEST, FORGOT_PSW_SUCCESS, FORGOT_PSW_ERROR, TPasswordActions } from '../actions/password';
import { TUser } from '../../utils/types';


const initialState = {
    accessToken: undefined,
    refreshToken: undefined,

    user: { name: '', email: '', password: ''},
   
    registerRequest: false,
    registerFailed: false,

    loginRequest: false,
    loginFailed: false,

    logoutRequest: false,
    logoutFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    saveUserRequest: false,
    saveUserFailed: false,

    refreshTokenRequest: false,
    refreshTokenFailed: false,

    resetPswRequest: false,
    resetPswSuccess: false,
    resetPswFailed: false,

    forgotPswRequest: false,
    forgotPswSuccess: false,
    forgotPswFailed: false,
};


describe('loginReducer ', () => {
    it('should return the initial state', () => {
      expect(loginReducer(undefined, {} as any)).toEqual(
        {
            accessToken: undefined,
            refreshToken: undefined,
        
            user: { name: '', email: '', password: ''},
           
            registerRequest: false,
            registerFailed: false,
        
            loginRequest: false,
            loginFailed: false,
        
            logoutRequest: false,
            logoutFailed: false,
        
            getUserRequest: false,
            getUserFailed: false,
        
            saveUserRequest: false,
            saveUserFailed: false,
        
            refreshTokenRequest: false,
            refreshTokenFailed: false,
        
            resetPswRequest: false,
            resetPswSuccess: false,
            resetPswFailed: false,
        
            forgotPswRequest: false,
            forgotPswSuccess: false,
            forgotPswFailed: false,
        }
      )
    })

    it('should handle LOGIN_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGIN_REQUEST
          })
        ).toHaveProperty(['loginRequest'], true);
      })

      it('should handle LOGIN_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGIN_SUCCESS,
            accessToken: "accessToken",
            refreshToken: "refreshToken",
            user: { name: 'name', email: 'email', password: 'password'},
          })
        ).toEqual(
            {
                ... initialState,
                accessToken: "accessToken",
                refreshToken: "refreshToken",
            
                user: { name: 'name', email: 'email', password: ''},
            
                loginRequest: false,
                loginFailed: false,
            } 
          )
      })

      it('should handle LOGIN_SUCCESS user undefined', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGIN_SUCCESS,
            accessToken: "accessToken",
            refreshToken: "refreshToken",
            user: null!,
          })
        ).toEqual( 
            {
                ... initialState,
                accessToken: "accessToken",
                refreshToken: "refreshToken",
            
                user: { name: '', email: '', password: ''},
            
                loginRequest: false,
                loginFailed: false,
            } 
          )
      })

      it('should handle LOGIN_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGIN_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                loginRequest: false,
                loginFailed: true,
            } 
          )
      })

      it('should handle LOGOUT_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGOUT_REQUEST
          })
        ).toHaveProperty(['logoutRequest'], true);
      })

      it('should handle LOGOUT_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGOUT_SUCCESS,
          })
        ).toEqual(
            {
                ... initialState,
                accessToken: undefined,
                refreshToken: undefined,
                logoutRequest: false,
                logoutFailed: false,
            } 
          )
      })

      it('should handle LOGOUT_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: LOGOUT_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                logoutRequest: false,
                logoutFailed: true,
            }  
          )
      })

      it('should handle REGISTER_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: REGISTER_REQUEST
          })
        ).toHaveProperty(['registerRequest'], true);
      })

      it('should handle REGISTER_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: REGISTER_SUCCESS,
            accessToken: "accessToken",
            refreshToken: "refreshToken",
            user: { name: 'name', email: 'email', password: 'password'},
          })
        ).toEqual(
            {
                ... initialState,
                accessToken: "accessToken",
                refreshToken: "refreshToken",
            
                user: { name: 'name', email: 'email', password: ''},
            
                registerRequest: false,
                registerFailed: false,
            } 
          )
      })

      it('should handle REGISTER_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: REGISTER_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                registerRequest: false,
                registerFailed: true,
            } 
          )
      })


      it('should handle GET_USER_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: GET_USER_REQUEST
          })
        ).toHaveProperty(['getUserRequest'], true); 
      })

      it('should handle GET_USER_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: GET_USER_SUCCESS,
            user: { name: 'name', email: 'email', password: 'password'},
          })
        ).toEqual(
            {
                ... initialState,
                user: { name: 'name', email: 'email', password: ''},
                getUserRequest: false,
                getUserFailed: false,
            } 
          )
      })

      it('should handle GET_USER_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: GET_USER_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                getUserRequest: false,
                getUserFailed: true,
            } 
          )
      })

      it('should handle SAVE_USER_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: SAVE_USER_REQUEST
          })
        ).toHaveProperty(['saveUserRequest'], true); 
      })

      it('should handle SAVE_USER_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: SAVE_USER_SUCCESS,
            user: { name: 'name', email: 'email', password: 'password'},
          })
        ).toEqual(
            {
                ... initialState,
                user: { name: 'name', email: 'email', password: ''},
                saveUserRequest: false,
                saveUserFailed: false,
            } 
          )
      })

      it('should handle SAVE_USER_ERROR', () => { 
        expect( 
            loginReducer(initialState, 
          {
            type: SAVE_USER_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                saveUserRequest: false,
                saveUserFailed: true,
            } 
          )
      })

      it('should handle REFRESH_TOKEN_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: REFRESH_TOKEN_REQUEST
          })
        ).toHaveProperty(['refreshTokenRequest'], true);
      })

      it('should handle REFRESH_TOKEN_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: REFRESH_TOKEN_SUCCESS,
            accessToken: "accessToken",
            refreshToken: "refreshToken",
          })
        ).toEqual(
            {
                ... initialState,
                accessToken: "accessToken",
                refreshToken: "refreshToken",            
                refreshTokenRequest: false,
                refreshTokenFailed: false,
            } 
          )
      })

      it('should handle REFRESH_TOKEN_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: REFRESH_TOKEN_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                refreshTokenRequest: false,
                refreshTokenFailed: true,
            } 
          )
      }) 

      it('should handle RESET_PSW_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: RESET_PSW_REQUEST
          })
        ).toEqual(
            {
                ... initialState,
                accessToken: undefined, 
                refreshToken: undefined, 
                resetPswRequest: true, 
                resetPswSuccess: false, 
                forgotPswSuccess: false
            } 
          );
      })

      it('should handle RESET_PSW_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: RESET_PSW_SUCCESS,
          })
        ).toEqual(
            {
                ... initialState,
                resetPswRequest: false, 
                resetPswFailed: false, 
                resetPswSuccess: true
            } 
          )
      })

      it('should handle RESET_PSW_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: RESET_PSW_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                resetPswFailed: true, 
                resetPswRequest: false, 
                resetPswSuccess: false
            } 
          )
      }) 

      it('should handle FORGOT_PSW_REQUEST', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: FORGOT_PSW_REQUEST
          })
        ).toEqual(
            {
                ... initialState,
                forgotPswRequest: true, 
                forgotPswSuccess: false
            } 
          );
      })

      it('should handle FORGOT_PSW_SUCCESS', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: FORGOT_PSW_SUCCESS,
          })
        ).toEqual(
            {
                ... initialState,
                forgotPswRequest: false, 
                forgotPswFailed: false, 
                forgotPswSuccess: true, 
                resetPswSuccess: false
            } 
          )
      })

      it('should handle FORGOT_PSW_ERROR', () => {
        expect( 
            loginReducer(initialState, 
          {
            type: FORGOT_PSW_ERROR
          })
        ).toEqual(
            {
                ... initialState,

                forgotPswFailed: true, 
                forgotPswRequest: false, 
                forgotPswSuccess: false
            } 
          )
      }) 
})
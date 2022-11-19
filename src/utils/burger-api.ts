

import {Token} from './constants'
import JsCookie from "js-cookie"
import { TUser } from './types';

const BURGER_API_URL = "https://norma.nomoreparties.space/api";
const INGREDIENTS_API_URL = `${BURGER_API_URL}/ingredients`;
const ORDERS_API_URL = `${BURGER_API_URL}/orders`;
const PSW_RESET_API_URL = `${BURGER_API_URL}/password-reset`;
const PSW_RESET_RESET_API_URL = `${BURGER_API_URL}/password-reset/reset`;
const REGISTER_API_URL = `${BURGER_API_URL}/auth/register`;
const LOGIN_API_URL = `${BURGER_API_URL}/auth/login`;
const LOGOUT_API_URL = `${BURGER_API_URL}/auth/logout`;
const TOKEN_API_URL = `${BURGER_API_URL}/auth/token`;
const USER_API_URL = `${BURGER_API_URL}/auth/user`;

export const WS_FEED_ORDERS_URL = "wss://norma.nomoreparties.space/orders/all";
export const WS_PROFILE_ORDERS_URL = "wss://norma.nomoreparties.space/orders";



const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
    return fetch(INGREDIENTS_API_URL)
      .then(checkResponse)
  };

export const getOrdersData = (ingredients: string[]) => {

    return fetch(ORDERS_API_URL, {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json",
                        "Authorization": JsCookie.get(Token.access)!
                        },
                        body: JSON.stringify({ ingredients })})
            .then(checkResponse)
};

export const register = ({ name, email, password}: TUser) => {
    return fetch(REGISTER_API_URL, {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name, email, password})})
      .then(checkResponse)
};

export const login = ({ email, password}: Omit<TUser, 'name'>) => {
    return fetch(LOGIN_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password})})
    .then(checkResponse)
};

export const logout = (refreshToken: string) => {
    return fetch(LOGOUT_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "token" : refreshToken})})
    .then(checkResponse)
};

export const token = (refreshToken: string) => {
    return fetch(TOKEN_API_URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ "token" : refreshToken}),
    })
    .then(checkResponse)
  };

  export const getUser = () => {
    return fetch(USER_API_URL, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JsCookie.get(Token.access)!
                    }
    })
    .then(checkResponse)
  };

  export const updateUser = ({ name, email, password}: TUser) => {
    return fetch(USER_API_URL, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JsCookie.get(Token.access)!
                    },
                    body: JSON.stringify({ name, email, password})})
    .then(checkResponse)
  };


  export const pswForgot = ({email}: {email: string}) => {
    return fetch(PSW_RESET_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "email": email})})
    .then(checkResponse)
};

export const pswReset = ({ password, token}: {password: string, token: string}) => {
    return fetch(PSW_RESET_RESET_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ password, token})})
    .then(checkResponse)
};

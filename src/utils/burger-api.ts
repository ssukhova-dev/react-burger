

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

function request(url: string, options?: RequestInit) {
  return fetch(url, options).then(checkResponse);
}

export const getIngredientsData = () => {
    return request(INGREDIENTS_API_URL);
  };

export const getOrdersData = (ingredients: string[]) => {

    return request(ORDERS_API_URL, {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json",
                        "Authorization": JsCookie.get(Token.access)!
                        },
                        body: JSON.stringify({ ingredients })});
};

export const register = ({ name, email, password}: TUser) => {
    return request(REGISTER_API_URL, {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name, email, password})});
};

export const login = ({ email, password}: Omit<TUser, 'name'>) => {
    return request(LOGIN_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password})});
};

export const logout = (refreshToken: string) => {
    return request(LOGOUT_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "token" : refreshToken})});
};

export const token = (refreshToken: string) => {
    return request(TOKEN_API_URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ "token" : refreshToken}),
    });
  };

  export const getUser = () => {
    return request(USER_API_URL, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JsCookie.get(Token.access)!
                    }
    });
  };

  export const updateUser = ({ name, email, password}: TUser) => {
    return request(USER_API_URL, {
                    method: 'PATCH',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": JsCookie.get(Token.access)!
                    },
                    body: JSON.stringify({ name, email, password})});
  };


  export const pswForgot = ({email}: {email: string}) => {
    return request(PSW_RESET_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "email": email})});
};

export const pswReset = ({ password, token}: {password: string, token: string}) => {
    return request(PSW_RESET_RESET_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ password, token})});
};

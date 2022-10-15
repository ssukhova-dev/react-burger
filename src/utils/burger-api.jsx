import React from 'react';

const BURGER_API_URL = "https://norma.nomoreparties.space/api";
const INGREDIENTS_API_URL = `${BURGER_API_URL}/ingredients`;
const ORDERS_API_URL = `${BURGER_API_URL}/orders`;
const REGISTER_API_URL = `${BURGER_API_URL}/auth/register`;
const LOGIN_API_URL = `${BURGER_API_URL}/auth/login`;
const LOGOUT_API_URL = `${BURGER_API_URL}/auth/logout`;
const TOKEN_API_URL = `${BURGER_API_URL}/auth/token`;



const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
    return fetch(INGREDIENTS_API_URL)
      .then(checkResponse)
  };


export function useFetch(requestFn)
{

    const [state, setState] = React.useState({isLoading: false,
                                                hasError: false,
                                                resultData: []});

    React.useEffect(()=>{ 

        setState({ ...state, hasError: false, isLoading: true });

        requestFn().then((data) => {
            setState({ ...state, resultData: data.data, isLoading: false }) 
        })
        .catch(e => {
            setState({ ...state, hasError: true, isLoading: false });
        })
        
    }, []);

    return state;

}
  

export const getOrdersData = (ingredients) => {

    return fetch(ORDERS_API_URL, {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ ingredients })})
            .then(checkResponse)
};

export const register = ({ name, email, password}) => {
    return fetch(REGISTER_API_URL, {
                        method: 'POST',
                        headers: {
                        "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ name, email, password})})
      .then(checkResponse)
};

export const login = ({ email, password}) => {
    return fetch(LOGIN_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password})})
    .then(checkResponse)
};

export const logout = (refreshToken) => {
    return fetch(LOGOUT_API_URL, {
                    method: 'POST',
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "token" : refreshToken})})
    .then(checkResponse)
};


const BURGER_API_URL = "https://norma.nomoreparties.space/api";
const INGREDIENTS_API_URL = `${BURGER_API_URL}/ingredients`;


const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsData = () => {
    return fetch(INGREDIENTS_API_URL)
      .then(checkResponse)
  };






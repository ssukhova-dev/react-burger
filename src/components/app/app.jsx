import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'


import {BURGER_API_URL} from '../../utils/burger-api' 

function App() {

  const [state, setState] = React.useState({isLoading: false,
    hasError: false,
    ingredients: []});


  const ingredientsUrl = `${BURGER_API_URL}/ingredients`;


  const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
  };


  React.useEffect(()=>{ 
    const getIngredients = async () => {
      setState({ ...state, hasError: false, isLoading: true });
      fetch(ingredientsUrl)
        .then(checkResponse)
        .then(data => {
              setState({ ...state, ingredients: data.data, isLoading: false }) 
            }
          )
        .catch(e => {
          setState({ ...state, hasError: true, isLoading: false });
        });
      }

      getIngredients();
  }, []);



  return (
    <div className={styles.app}>
   
      <AppHeader/>
      <section className={styles.app_container}>
        <BurgerIngredients ingredients = {state.ingredients}/>
        <BurgerConstructor ingredients = {state.ingredients}/>
      </section>
 

    </div>
  );
}

export default App;

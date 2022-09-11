import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'


import {getIngredientsData} from '../../utils/burger-api' 

function App() {

  const [state, setState] = React.useState({isLoading: false,
    hasError: false,
    ingredients: []});


  React.useEffect(()=>{ 
    const getIngredients = async () => {
        setState({ ...state, hasError: false, isLoading: true });

        getIngredientsData()
        .then((data) => {
          setState({ ...state, ingredients: data.data, isLoading: false }) 
        })
        .catch(e => {
          setState({ ...state, hasError: true, isLoading: false });
        })
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

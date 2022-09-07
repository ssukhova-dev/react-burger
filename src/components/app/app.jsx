import React from 'react';
import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

//import appData from '../../utils/data.js';
//import '@ya.praktikum/react-developer-burger-ui-components' <div className="App ml-5 mr-5 mb-5 mt-5">

function App() {

  const [state, setState] = React.useState({isLoading: false,
    hasError: false,
    ingredients: []});

  const ingredientsUrl = "https://norma.nomoreparties.space/api/ingredients";

  React.useEffect(()=>{ 
    const getIngredients = async () => {
      setState({ ...state, hasError: false, isLoading: true });
      fetch(ingredientsUrl)
        .then(res => res.json())
        .then(data => {
          
              console.log(data);
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

import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import {useFetch, getIngredientsData} from '../../utils/burger-api' 

import {IngredientsContext} from '../../utils/context'


function App() {

  const {isLoading, hasError, resultData : ingredients} = useFetch(getIngredientsData);


  return (
    <IngredientsContext.Provider value={ingredients}>
      <div className={styles.app}>
    

        {hasError ? (
            <section className={styles.app_error}>
                Some error. Reload application, please.
            </section> 
        ) : (

        isLoading ? (
            <section className={styles.app_loading}>
                Loading...
            </section> 
        ) : (

          <>
            <AppHeader/>
            <section className={styles.app_container}>
              <BurgerIngredients />
              <BurgerConstructor />
            </section>
          </>

        ))}
  
  

      </div>
    </IngredientsContext.Provider>
  );
}

export default App;

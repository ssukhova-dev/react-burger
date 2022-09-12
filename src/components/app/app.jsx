import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import {useFetch, getIngredientsData} from '../../utils/burger-api' 

import {IngredientsContext, SelectedIngredientsContext} from '../../utils/context'


function App() {

  const {isLoading, hasError, resultData : ingredients} = useFetch(getIngredientsData);

  const [selectedIngredients, setSelectedIngredients] = React.useState( []);



  return (
    <IngredientsContext.Provider value={ingredients}>
      <SelectedIngredientsContext.Provider value={{selectedIngredients, setSelectedIngredients}}>
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
      </SelectedIngredientsContext.Provider>
    </IngredientsContext.Provider>
  );
}

export default App;

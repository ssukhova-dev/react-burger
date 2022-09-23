import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import {ERROR_TEXT, LOADING_TEXT} from '../../utils/constants' 

import {useFetch, getIngredientsData} from '../../utils/burger-api' 

import {useSelector, useDispatch} from 'react-redux'
import { SET_INGREDIENTS, ADD_INGREDIENT, REMOVE_INGREDIENT } from '../../services/actions/actions';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {

  const {isLoading, hasError, resultData : ingredientsResultData} = useFetch(getIngredientsData);

  const dispatch = useDispatch();

  React.useEffect(()=> {

      dispatch(
          {
            type: SET_INGREDIENTS,
            ingredients: ingredientsResultData
          }
        );

  }, [ingredientsResultData]);

  return (
      <div className={styles.app}>
      

          {hasError ? (
              <section className={styles.app_error}>
                  {ERROR_TEXT}
              </section> 
          ) : (

          isLoading ? (
              <section className={styles.app_loading}>
                  {LOADING_TEXT}
              </section> 
          ) : (

            <>
              <AppHeader/>
              <section className={styles.app_container}>
                <DndProvider backend={HTML5Backend}>
                  <BurgerIngredients />
                  <BurgerConstructor />
                </DndProvider >
              </section>
            </>

          ))}
    
    

        </div>

  );
}

export default App;

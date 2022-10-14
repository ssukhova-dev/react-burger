import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import {ERROR_TEXT, LOADING_TEXT} from '../../utils/constants' 

import {getIngredients} from '../../services/actions/burger-ingredients' 

import {useSelector, useDispatch} from 'react-redux'

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import {Switch, Route} from "react-router-dom"
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ProfilePage from '../../pages/profile/profile';
import {ProtectedRoute} from "../protected-route/protected-route"
import {PublicRoute} from "../public-route/public-route"
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';


function App() {


 const isLoading = useSelector(store => store.ingredients.ingredientsRequest);
 const hasError = useSelector(store => store.ingredients.ingredientsFailed);


  const dispatch = useDispatch();
  
  React.useEffect(()=> {
        dispatch(getIngredients())
    }, [dispatch])


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

                  <Switch>
                    <Route path="/" exact={true}>
                        <DndProvider backend={HTML5Backend}>
                          <BurgerIngredients />
                          <BurgerConstructor />
                        </DndProvider >               
                    </Route>


                    <PublicRoute path="/login" exact={true} redirectTo="/">              
                        <LoginPage />
                    </PublicRoute>
                    
                    <Route path="/logout" exact={true}>
                    </Route>

                    <Route path="/register" exact={true}>
                        <RegisterPage />
                    </Route>

                    <ProtectedRoute path="/profile" exact={true} redirectTo="/login"> 
                        <ProfilePage />
                    </ProtectedRoute>

                    <Route path="/forgot-password" exact={true}>
                        <ForgotPasswordPage />
                    </Route>

                    <Route path="/reset-password" exact={true}>
                        <ResetPasswordPage />
                    </Route>

                    <Route path="/ingredients/:id" exact={true}>
                    </Route>

                  </Switch>

                </section>
            </>
          
          ))}
        </div>
  );
}

export default App;

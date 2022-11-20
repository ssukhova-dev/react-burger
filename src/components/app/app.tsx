import React from 'react';

import styles from './app.module.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import {ERROR_TEXT, LOADING_TEXT} from '../../utils/constants' 

import {getIngredients} from '../../services/actions/burger-ingredients' 
import {getUser} from '../../services/actions/profile' 
import {loginSuccess} from '../../services/actions/login' 

import { useSelector, useDispatch } from '../../services/hooks';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import {Switch, Route, useLocation, useHistory} from "react-router-dom"
import LoginPage from '../../pages/login/login';
import RegisterPage from '../../pages/register/register';
import ProfilePage from '../../pages/profile/profile';
import {ProtectedRoute} from "../protected-route/protected-route"
import {PublicRoute} from "../public-route/public-route"
import ForgotPasswordPage from '../../pages/forgot-password/forgot-password';
import ResetPasswordPage from '../../pages/reset-password/reset-password';
import IngredientDetailsPage from '../../pages/ingredient-details/ingredient-details';
import PageNotFound404 from '../../pages/page-not-found/page-not-found';

import useModal from '../modal/use-modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import { ADD_CURRENT_INGREDIENT, REMOVE_CURRENT_INGREDIENT } from '../../services/actions/burger-ingredients';
import { TIngredient, TOrder } from '../../utils/types';
import FeedPage from '../../pages/feed/feed';

import OrderInfo from '../order-info/order-info';
import OrderInfoPage from '../../pages/order-info/order-info';
import { ADD_CURRENT_ORDER, REMOVE_CURRENT_ORDER } from '../../services/actions/order';

function App() {

    const history = useHistory();
    const location = useLocation();
    const background = location.state && location.state.background;

    const isLoading = useSelector((store) => store.ingredients.ingredientsRequest);
    const hasError = useSelector((store) => store.ingredients.ingredientsFailed);


    const dispatch = useDispatch();
    
    React.useEffect(()=> {
            dispatch(getIngredients());
            dispatch(getUser());
        }, [dispatch])

        
        const ingredientDetailsDlg = useModal();

        function showIngredientDetailsDlg(ingredient: TIngredient){
            dispatch({
                type: ADD_CURRENT_INGREDIENT,
                ingredient: ingredient
            });
            ingredientDetailsDlg.open();
        }

        function closeIngredientDetailsDlg(){
            dispatch({ type: REMOVE_CURRENT_INGREDIENT });
            ingredientDetailsDlg.requestClose();
            history.goBack();
        }


        const orderInfoDlg = useModal();

        function showOrderInfoDlg(order: TOrder){
            dispatch({
                type: ADD_CURRENT_ORDER,
                order: order
            });
            orderInfoDlg.open();
        }

        function closeOrderInfoDlg(){
            dispatch({ type: REMOVE_CURRENT_ORDER });
            orderInfoDlg.requestClose();
            history.goBack();
        }

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

                    <Switch location={background || location}>
                        <Route path="/" exact={true}>
                            <DndProvider backend={HTML5Backend}>
                                <BurgerIngredients ingredientDetailsDlgOpen={showIngredientDetailsDlg}/>
                                <BurgerConstructor />
                            </DndProvider >               
                        </Route>


                        <PublicRoute path="/login" exact={true} redirectTo="/">              
                            <LoginPage />
                        </PublicRoute>

                        <PublicRoute path="/register" exact={true} redirectTo="/">
                            <RegisterPage />
                        </PublicRoute>

                        <ProtectedRoute path="/profile/orders/:id" exact={true} redirectTo="/login">
                            <OrderInfoPage profileOrder={true}/>
                        </ProtectedRoute>

                        <ProtectedRoute path="/profile" exact={false} redirectTo="/login"> 
                            <ProfilePage orderInfoDlgOpen={showOrderInfoDlg}/>
                        </ProtectedRoute>

                        <PublicRoute path="/forgot-password" exact={true} redirectTo="/">
                            <ForgotPasswordPage />
                        </PublicRoute>

                        <PublicRoute path="/reset-password" exact={true} redirectTo="/">
                            <ResetPasswordPage />
                        </PublicRoute>

                        <Route path="/ingredients/:id" exact={true}>
                            <IngredientDetailsPage />
                        </Route>

                        <Route path="/feed" exact={true}>
                            <FeedPage orderInfoDlgOpen={showOrderInfoDlg}/>
                        </Route>

                        <Route path="/feed/:id" exact={true}>
                            <OrderInfoPage />
                        </Route>

                        <Route>
                            <PageNotFound404 />
                        </Route>

                    </Switch>

                    </section>


                    {
                        background && (
                            <Route path="/ingredients/:id" exact={true}>
                                <Modal onClose={closeIngredientDetailsDlg} title="Детали ингредиента">
                                    <IngredientDetails />
                                </Modal>
                            </Route>
                        )
                    }

                    {
                        background && (
                            <Route path="/feed/:id" exact={true}>
                                <Modal onClose={closeOrderInfoDlg} >
                                    <OrderInfo profileOrder={false}/>
                                </Modal>
                            </Route>
                        )
                    }

                    {
                        background && (
                            <Route path="/profile/orders/:id" exact={true}>
                                <Modal onClose={closeOrderInfoDlg} >
                                    <OrderInfo profileOrder={true}/>
                                </Modal>
                            </Route>
                        )
                    }

                </>
            
            ))}
            </div>
    );
}

export default App;



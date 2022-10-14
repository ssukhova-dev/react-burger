import appHeaderStyles from './app-header.module.css';

import {useSelector, useDispatch} from 'react-redux'

import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {PublicRoute} from "../public-route/public-route"
import {ProtectedRoute} from "../protected-route/protected-route"

import {BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import { logoutThunk, isLoggedInSelector } from '../../services/actions/user';



function AppHeader() {
   
    const isLoggedIn = useSelector(isLoggedInSelector);
    const dispatch = useDispatch();

      return (
        <header className={appHeaderStyles.app_header}>
            <nav className={appHeaderStyles.app_nav}>
 
                <div className={appHeaderStyles.navigation_panel}>

                    <div className={appHeaderStyles.navigation_link} >
                    <a href="#" className={appHeaderStyles.navigation_link} active_page="true">
                        <div className={appHeaderStyles.link_icon}><BurgerIcon type="secondary"/></div>
                        <div className={appHeaderStyles.link_icon_hover}><BurgerIcon type="primary"/></div>
                        <p className="text text_type_main-default">
                            Конструктор
                        </p>
                    </a>
                    </div> 

                    <div className={appHeaderStyles.navigation_link} >
                    <a href="#" className={appHeaderStyles.navigation_link} >
                    <div className={appHeaderStyles.link_icon}><ListIcon type="secondary"/></div>
                    <div className={appHeaderStyles.link_icon_hover}><ListIcon type="primary"/></div>
                    <p className="text text_type_main-default">
                        Лента заказов
                    </p>
                    </a>
                    </div>

                </div>

    
                <div className="flex-center pl-5 pr-5 pb-5 pt-5" >
                <Logo  />
                </div>




                <div className={appHeaderStyles.navigation_account}>
                    <div className={appHeaderStyles.navigation_link} >
                        <NavLink to="/register" className={appHeaderStyles.navigation_link} >
                            <div className={appHeaderStyles.link_icon}><ProfileIcon type="secondary"/></div>
                            <div className={appHeaderStyles.link_icon_hover}><ProfileIcon type="primary"/></div>
                            <p className="text text_type_main-default">
                                Личный кабинет
                            </p>
                        </NavLink>
                    </div>
                    <div>
                        Auth 
                        {isLoggedIn && 'LOGGED_IN'}

                        <PublicRoute path="/" noRedirect="true">   
                            <>
                                <NavLink to="/login"> login </NavLink>
                                <NavLink to="/register"> register </NavLink>
                            </>  
                        </PublicRoute>

                        <ProtectedRoute path="/" noRedirect="true">   
                            <>
                                <NavLink to="/profile"> profile </NavLink>
                                <a href="#" onClick={(e) => {e.preventDefault(); dispatch(logoutThunk())} }> logout </a>
                            </>
                        </ProtectedRoute>

                    </div>
                </div>
                

            </nav>
        </header>
      );
    
  }
  
  export default AppHeader 
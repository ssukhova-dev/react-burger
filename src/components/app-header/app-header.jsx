import appHeaderStyles from './app-header.module.css';

import {useSelector, useDispatch} from 'react-redux'

import React from 'react'
import {NavLink} from 'react-router-dom'

import {BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'


function AppHeader() {

      return (
        <header className={appHeaderStyles.app_header}>
            <nav className={appHeaderStyles.app_nav}>
 
                <div className={appHeaderStyles.navigation_panel}>

                    <div className={appHeaderStyles.navigation_link} >
                        <NavLink to="/" exact={true} className={appHeaderStyles.navigation_link} 
                                                     activeClassName={appHeaderStyles.navigation_link_active}>
                            <div className={appHeaderStyles.link_icon}><BurgerIcon type="secondary"/></div>
                            <div className={appHeaderStyles.link_icon_hover}><BurgerIcon type="primary"/></div>
                            <p className="text text_type_main-default">
                                Конструктор
                            </p>
                        </NavLink>
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
                        <NavLink to="/profile"  className={appHeaderStyles.navigation_link} 
                                                            activeClassName={appHeaderStyles.navigation_link_active}>
                            <div className={appHeaderStyles.link_icon}><ProfileIcon type="secondary"/></div>
                            <div className={appHeaderStyles.link_icon_hover}><ProfileIcon type="primary"/></div>
                            <p className="text text_type_main-default">
                                Личный кабинет
                            </p>
                        </NavLink>
                    </div>
                </div>

            </nav>
        </header>
      );
    
  }
  
  export default AppHeader 
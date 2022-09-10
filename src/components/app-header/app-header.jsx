import appHeaderStyles from './app-header.module.css';

import React from 'react'

import {BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
   
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
                    <a href="#" className={appHeaderStyles.navigation_link} >
                    <div className={appHeaderStyles.link_icon}><ProfileIcon type="secondary"/></div>
                    <div className={appHeaderStyles.link_icon_hover}><ProfileIcon type="primary"/></div>
                    <p className="text text_type_main-default">
                        Личный кабинет
                    </p>
                    </a>
                    </div>
                </div>
                

            </nav>
        </header>
      );
    
  }
  
  export default AppHeader 
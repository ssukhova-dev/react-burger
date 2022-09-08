import appHeaderStyles from './app-header.module.css';

import React from 'react' // импорт библиотеки

import {BurgerIcon, ListIcon, ProfileIcon, Logo} from '@ya.praktikum/react-developer-burger-ui-components'

function AppHeader() {
   
      return (
        <div className={appHeaderStyles.app_header}>

            <div className={appHeaderStyles.navigation_panel}>

                <div className={appHeaderStyles.navigation_link} >
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default">
                    Конструктор
                </p>

                </div> 

                <div className={appHeaderStyles.navigation_link} >
                <ListIcon type="secondary" />
                <p className="text text_type_main-default">
                    Лента заказов
                </p>
                </div>

            </div>

 
            <div className="flex-center pl-5 pr-5 pb-5 pt-5" >
              <Logo  />
            </div>




            <div className={appHeaderStyles.navigation_account}>
                <div className={appHeaderStyles.navigation_link} >
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default">
                    Личный кабинет
                </p>

                </div>
            </div>
              

        </div>
      );
    
  }
  
  export default AppHeader 
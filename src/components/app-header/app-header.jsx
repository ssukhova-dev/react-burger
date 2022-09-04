import './app-header.css';

import React from 'react' // импорт библиотеки
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
 


class AppHeader extends React.Component {
    render() {
      return (
        <div className="app-header">

            <div className="navigation-panel">

                <div className="navigation-link" >
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default">
                    Конструктор
                </p>

                </div> 

                <div className="navigation-link" >
                <ListIcon type="secondary" />
                <p className="text text_type_main-default">
                    Лента заказов
                </p>
                </div>

            </div>

 
            <div className="flex-center pl-5 pr-5 pb-5 pt-5" >
              <Logo  />
            </div>




            <div className="navigation-account">
                <div className="navigation-link" >
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default">
                    Личный кабинет
                </p>

                </div>
            </div>
              

        </div>
      );
    }
  }
  
  export default AppHeader 

import React from 'react' // импорт библиотеки
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'

class AppHeader extends React.Component {
    render() {
      return (
        <div className="AppHeader">
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default">
                Конструктор
              </span>

              <ListIcon type="secondary" />
              <span className="text text_type_main-default">
                Лента заказов
              </span>

              <Logo />

              <ProfileIcon type="secondary" />
              <span className="text text_type_main-default">
                Личный кабинет
              </span>
        </div>
      );
    }
  }
  
  export default AppHeader 
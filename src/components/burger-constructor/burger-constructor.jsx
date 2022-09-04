
import React from 'react' // импорт библиотеки
import './burger-constructor.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'

import ImgBun from './../../images/bun-02.svg'
import ImgMeat from './../../images/meat-02.svg'
import ImgMineralRings from './../../images/mineral rings.svg'
import ImgSauce from './../../images/sauce-03.svg'

function BurgerConstructor() {
   
      return (
        <div className="burger-constructor">

            <p className="text text_type_main-large pl-5 pr-5 pb-5 pt-5" >
                BurgerConstructor
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={ImgBun}
                />
                <ConstructorElement
                    text="Соус традиционный галактический"
                    price={30}
                    thumbnail={ImgSauce}
                />
                  <ConstructorElement
                    text="Мясо бессмертных молюсков Protostomia"
                    price={300}
                    thumbnail={ImgMeat}
                />
                  <ConstructorElement
                    text="{хрустящие минеральные кольца}"
                    price={80}
                    thumbnail={ImgMineralRings}
                />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={ImgBun}
                />
            </div>



        </div>
      );
    
  }
  
  export default BurgerConstructor 
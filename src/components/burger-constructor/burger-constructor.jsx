
import React from 'react' // импорт библиотеки
import burgerConstructor from './burger-constructor.module.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'

import ImgBun from './../../images/bun-02.svg'
import ImgMeat from './../../images/meat-02.svg'
import ImgMineralRings from './../../images/mineral rings.svg'
import ImgSauce from './../../images/sauce-03.svg'

function BurgerConstructor() {
   
      return (
        <section className={burgerConstructor.burger_constructor}>


            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '32px' }}>
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



        </section>
      );
    
  }
  
  export default BurgerConstructor 
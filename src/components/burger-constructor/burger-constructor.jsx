
import React from 'react' // импорт библиотеки
import './burger-constructor.css';
import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'

import Img from '../../images/bun-02.jpg'

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
                    thumbnail={Img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={Img}
                />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={Img}
                />
            </div>



            <ul>
                <li><ConstructorElement/></li>
                <li><ConstructorElement/></li>
                <li><ConstructorElement/></li>
                <li><ConstructorElement/></li>
                
            </ul>


        </div>
      );
    
  }
  
  export default BurgerConstructor 
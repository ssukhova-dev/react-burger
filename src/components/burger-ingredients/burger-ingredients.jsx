import React from 'react' // импорт библиотеки

import './burger-ingredients.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'


  function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className="burger-ingredients">

            <p className="burger-ingredient-caption text text_type_main-large pl-5 pr-5 pb-5 pt-5" >
                Соберите бургер
            </p>

            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>



            <div style={{ display: 'flex',  alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                <BurgerIngredientCategory caption="Булки"/>
                <BurgerIngredientCategory caption="Соусы"/>
                <BurgerIngredientCategory caption="Начинка"/>
     
            </div>




    </div>
    );
  }
  
  export default BurgerIngredients 
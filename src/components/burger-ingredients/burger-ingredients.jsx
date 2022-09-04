import React from 'react' // импорт библиотеки

import './burger-ingredients.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'


  function BurgerIngredients() {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className="burger-ingredients">

            <p className="text text_type_main-large pl-5 pr-5 pb-5 pt-5" >
                Соберите бургер
            </p>

            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Three
                </Tab>
            </div>



            <div style={{ display: 'flex',  alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                <BurgerIngredientCategory/>
                <BurgerIngredientCategory/>
                <BurgerIngredientCategory/>
     
            </div>




    </div>
    );
  }
  
  export default BurgerIngredients 
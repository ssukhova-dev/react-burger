import React from 'react' // импорт библиотеки

import './burger-ingredients.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'


  function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className="burger-ingredients">

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
                <BurgerIngredientCategory caption="Булки" data={props.data}/>
                <BurgerIngredientCategory caption="Соусы" data={props.data}/>
                <BurgerIngredientCategory caption="Начинка" data={props.data}/>
     

            </div>

    </section>
    );
  }
  
  export default BurgerIngredients 
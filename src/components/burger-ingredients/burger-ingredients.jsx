import React from 'react' // импорт библиотеки
import PropTypes from 'prop-types';

import burgerIngStyles from './burger-ingredients.module.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'

  function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState('one')

    const IngredientTypes = { bun: 'bun', sauce: 'sauce', main: 'main',}

    const buns = props.ingredients.filter(item => item.type === IngredientTypes.bun);
    const sauces = props.ingredients.filter(item => item.type === IngredientTypes.sauce);
    const mains = props.ingredients.filter(item => item.type === IngredientTypes.main);

    return (
        <section className={burgerIngStyles.burger_ingredients}>

            <p className={`${burgerIngStyles.burger_ingredient_caption} text text_type_main-large p-5`} >
                Соберите бургер
            </p>

  
            <div className={burgerIngStyles.burger_ingredients_tabs} >
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



            <div className={burgerIngStyles.burger_category_list}>
                <BurgerIngredientCategory caption="Булки" ingredients={buns}/>
                <BurgerIngredientCategory caption="Соусы" ingredients={sauces}/>
                <BurgerIngredientCategory caption="Начинка" ingredients={mains}/>
     

            </div>

    </section>
    );
  }

  BurgerIngredients.propTypes = {
    ingredients: PropTypes.array
  };
  
  export default BurgerIngredients 
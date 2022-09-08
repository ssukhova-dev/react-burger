import React from 'react' // импорт библиотеки
import PropTypes from 'prop-types';

import burgerIngStyles from './burger-ingredients.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
 
import ingredientPropType from './../../utils/prop-types.jsx'
import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'

  function BurgerIngredients(props) {
    const IngredientTypes = { bun: 'bun', sauce: 'sauce', main: 'main',}
   
    const [current, setCurrent] = React.useState(IngredientTypes.bun)


    const buns = props.ingredients.filter(item => item.type === IngredientTypes.bun);
    const sauces = props.ingredients.filter(item => item.type === IngredientTypes.sauce);
    const mains = props.ingredients.filter(item => item.type === IngredientTypes.main);

    return (
        <section className={burgerIngStyles.burger_ingredients}>

            <p className={`${burgerIngStyles.burger_ingredient_caption} text text_type_main-large p-5`} >
                Соберите бургер
            </p>

  
            <div className={burgerIngStyles.burger_ingredients_tabs} >
                <Tab value={IngredientTypes.bun} active={current === IngredientTypes.bun} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value={IngredientTypes.sauce} active={current === IngredientTypes.sauce} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value={IngredientTypes.main} active={current === IngredientTypes.main} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>



            <div className={`${burgerIngStyles.burger_category_list} ${commonStyles.custom_scrollbar}`}>
                <BurgerIngredientCategory caption="Булки" ingredients={buns}/>
                <BurgerIngredientCategory caption="Соусы" ingredients={sauces}/>
                <BurgerIngredientCategory caption="Начинка" ingredients={mains}/>
     

            </div>

    </section>
    );
  }



  BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType)
  };
  
  export default BurgerIngredients 
import React from 'react'  
import PropTypes from 'prop-types';

import ingredientPropType from './../../utils/prop-types.jsx'

import burgerIngCardStyle from './burger-ingredient-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredientCard({ ingredient, ingredientDetailsDlgRequest }) {

      return (

              <div className={burgerIngCardStyle.burger_ingredient_card} onClick={()=>ingredientDetailsDlgRequest(ingredient)}>

         
                <Counter count={1} size="default" />

                <img src={ ingredient.image } alt={`изображение ингредиента ${ingredient.name}`} />
               
                <span className={`ml-2 mr-2 mb-2 mt-2 ${burgerIngCardStyle.flex_center_row}`} >
                    <p className="text text_type_main-small"  >
                        {ingredient.price}
                    </p>
                    <CurrencyIcon type="primary" />
                </span>              

                <p className="text text_type_main-small" >
                    {ingredient.name}
                </p>

              </div>
    
      );
  
  }

  BurgerIngredientCard.propTypes = {
    ingredient: ingredientPropType,
    ingredientDetailsDlgRequest: PropTypes.func.isRequired
  };
  
  export default BurgerIngredientCard 
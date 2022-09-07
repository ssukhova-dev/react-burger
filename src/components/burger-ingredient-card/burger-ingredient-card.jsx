import React from 'react' // импорт библиотеки
import PropTypes from 'prop-types';

//import burgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card.module.css'; <div className={burgerIngredientCard.burgerIngredientCard}>

import burgerIngredientCard from './burger-ingredient-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredientCard(props) {

      return (
              <div className={burgerIngredientCard.burger_ingredient_card}>

         
                <Counter count={1} size="default" />

                <img src={ props.thumbnail } alt={`изображение ингредиента ${props.text}`} />
               
                <span className={`ml-2 mr-2 mb-2 mt-2 ${burgerIngredientCard.flex_center_row}`} >
                    <p className="text text_type_main-small"  >
                        {props.price}
                    </p>
                    <CurrencyIcon type="primary" />
                </span>              

                <p className="text text_type_main-small" >
                    {props.text}
                </p>
                  
              </div>


      );
  
  }

  BurgerIngredientCard.propTypes = {
    price: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  };
  
  export default BurgerIngredientCard 
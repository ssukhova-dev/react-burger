import PropTypes from 'prop-types';

import ingredientPropType from './../../utils/prop-types.jsx'

import burgerIngCardStyle from './burger-ingredient-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

import {useDispatch} from 'react-redux'
import { ADD_INGREDIENT } from '../../services/actions/actions';

function BurgerIngredientCard({ ingredient, ingredientDetailsDlgOpen }) {

      const dispatch = useDispatch();

      const onCardClick = () => {
        
        ingredientDetailsDlgOpen(ingredient);
        
        dispatch({
            type: ADD_INGREDIENT,
            ingredient: ingredient
          });
      };


      return (

              <div className={burgerIngCardStyle.burger_ingredient_card} onClick={onCardClick}>

         
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
    ingredient: ingredientPropType.isRequired,
    ingredientDetailsDlgOpen: PropTypes.func.isRequired
  };
  
  export default BurgerIngredientCard 
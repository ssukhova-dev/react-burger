
import cardStyles from './burger-constructor-card.module.css';
import ingredientPropType from './../../utils/prop-types.jsx'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import { useDispatch } from 'react-redux';

import { REMOVE_INGREDIENT } from '../../services/actions/burger-constructor';


function BurgerConstructorCard({ingredient}) {

    const dispatch = useDispatch();

    const handleRemoveIngredient = (ingredient) => {
        dispatch(
          {
            type: REMOVE_INGREDIENT,
            ingredient: ingredient
          } );
      };

      return (
                <span className={`${cardStyles.burger_filling} m-2`} >
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        text={ingredient.name}
                        price={ingredient.price}
                        thumbnail={ingredient.image_mobile}   
                        handleClose={() => handleRemoveIngredient(ingredient)}                          
                    />
                </span>       
      );
    
  }

  BurgerConstructorCard.propTypes = {
    ingredient: ingredientPropType.isRequired
  };
  
  export default BurgerConstructorCard 
import PropTypes from 'prop-types';

import ingredientPropType from './../../utils/prop-types.jsx'

import burgerIngCardStyle from './burger-ingredient-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

import {useSelector} from 'react-redux'

import { useDrag } from 'react-dnd';

function BurgerIngredientCard({ ingredient, ingredientDetailsDlgOpen }) {

      const onCardClick = () => {
        ingredientDetailsDlgOpen(ingredient);
      };

      const count = useSelector(store => {

        const foundedIngredient = store.cart.cart.find( item => item._id === ingredient._id);
        return foundedIngredient ? foundedIngredient.count : 0;

      })

      const [{ opacity }, ref] = useDrag({
        type: 'ingredient',
        item:  ingredient ,
        collect: monitor => ({
          opacity: monitor.isDragging() ? 0.5 : 1
        })
      });

      return (

              <div className={burgerIngCardStyle.burger_ingredient_card} onClick={onCardClick} ref={ref} style={{ opacity }}>

         
                {(count !== 0) && (<Counter count={count} size="default" />)}

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

import { TCartIngredient, TIngredient } from '../../utils/types';

import { DNDTypes} from '../../utils/constants'
import burgerIngCardStyle from './burger-ingredient-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector } from '../../services/hooks';
import {useHistory, useLocation} from "react-router-dom"

import { useDrag } from 'react-dnd';
import { FC } from 'react';


interface IBurgerIngredientCardProps{
  ingredient: TIngredient;
  ingredientDetailsDlgOpen: (ingredient: TIngredient) => void;
}

const BurgerIngredientCard: FC<IBurgerIngredientCardProps> = ({ ingredient, ingredientDetailsDlgOpen }) => {

      const history = useHistory();
      const location = useLocation();

      const onCardClick = () => {

        history.push("/ingredients/" + ingredient._id, {background: location});

        ingredientDetailsDlgOpen(ingredient);
      };

      const count: number = useSelector((store) => {
        const foundedIngredients: Array<TCartIngredient> = store.cart.cart.filter( (item: TCartIngredient) => item._id === ingredient._id);
        return foundedIngredients ? foundedIngredients.length : 0;
      })

      const [{ opacity }, ref] = useDrag({
        type: DNDTypes.ingredient,
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

  export default BurgerIngredientCard 
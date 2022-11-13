
import { TCartIngredient, TIngredient } from '../../utils/types';


import styles from './order-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import { useSelector } from '../../services/hooks';
import {useHistory, useLocation} from "react-router-dom"

import { FC } from 'react';

/*
interface IBurgerIngredientCardProps{
  ingredient: TIngredient;
  ingredientDetailsDlgOpen: (ingredient: TIngredient) => void;
}*/

//const OrderCard: FC<IBurgerIngredientCardProps> = ({ ingredient, ingredientDetailsDlgOpen }) => {
const OrderCard: FC = () => {

      const history = useHistory();
      const location = useLocation();

      const onCardClick = () => {

       /* history.push("/ingredients/" + ingredient._id, {background: location});

        ingredientDetailsDlgOpen(ingredient);*/
      };

      return (

              <div className={styles.order_card} onClick={onCardClick} >

         
                order card


              </div>
    
      );
  
  }

  export default OrderCard 
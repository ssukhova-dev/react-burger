import React, { FC } from 'react';
import cardStyles from './burger-constructor-card.module.css';
import { DNDTypes} from '../../utils/constants'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import { useDispatch } from '../../services/hooks';

import { REMOVE_INGREDIENT,MOVE_INGREDIENTs } from '../../services/actions/burger-constructor';

import { useDrag, useDrop } from 'react-dnd';
import { TCartIngredient, TDropCollectedProps } from '../../utils/types';

interface IBurgerConstructorCardProps{
  ingredient: TCartIngredient;
}

const BurgerConstructorCard: FC<IBurgerConstructorCardProps> = ({ingredient}) => {

    const dispatch = useDispatch();

    const handleRemoveIngredient = (ingredient: TCartIngredient) => {
        dispatch(
          {
            type: REMOVE_INGREDIENT,
            ingredient: ingredient
          } );
      };

      const ref = React.useRef<HTMLSpanElement>(null); 

      const [{ opacity }, dragRef] = useDrag({
        type: DNDTypes.cartIngredient,
        item:  ingredient ,
        collect: monitor => ({
          opacity: monitor.isDragging() ? 0.5 : 1
        })
      });

      const moveIngredients = (dragIngredient: TCartIngredient, dropIngredient: TCartIngredient) => {

        dispatch({
            type: MOVE_INGREDIENTs,
            dragIngredient: dragIngredient,
            dropIngredient: dropIngredient
          });
      };

      const [{ isHover }, dropTarget] = useDrop<TCartIngredient, unknown, TDropCollectedProps>({
        accept: DNDTypes.cartIngredient,
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item: TCartIngredient) {           
            moveIngredients(item, ingredient);  
        }
      });

      dragRef(dropTarget(ref));

      return (
                <span className={`${cardStyles.burger_filling} m-2`} ref={ref} style={{ opacity }} >
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

  
  export default BurgerConstructorCard 
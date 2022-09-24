import React from 'react';
import cardStyles from './burger-constructor-card.module.css';
import ingredientPropType from './../../utils/prop-types.jsx'
import { DNDTypes} from '../../utils/constants'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import { useDispatch } from 'react-redux';

import { REMOVE_INGREDIENT,MOVE_INGREDIENTs } from '../../services/actions/burger-constructor';

import { useDrag, useDrop } from 'react-dnd';

function BurgerConstructorCard({ingredient}) {

    const dispatch = useDispatch();

    const handleRemoveIngredient = (ingredient) => {
        dispatch(
          {
            type: REMOVE_INGREDIENT,
            ingredient: ingredient
          } );
      };

      const ref = React.useRef(null); 

      const [{ opacity }, dragRef] = useDrag({
        type: DNDTypes.cartIngredient,
        item:  ingredient ,
        collect: monitor => ({
          opacity: monitor.isDragging() ? 0.5 : 1
        })
      });

      const moveIngredients = (dragIngredient, dropIngredient) => {

        dispatch({
            type: MOVE_INGREDIENTs,
            dragIngredient: dragIngredient,
            dropIngredient: dropIngredient
          });
      };

      const [{ isHover }, dropTarget] = useDrop({
        accept: DNDTypes.cartIngredient,
        collect: monitor => ({
            isHover: monitor.isOver()
        }),
        drop(item) {           
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

  BurgerConstructorCard.propTypes = {
    ingredient: ingredientPropType.isRequired
  };
  
  export default BurgerConstructorCard 
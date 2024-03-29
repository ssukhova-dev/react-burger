
import burgerConstructorStyles from './burger-constructor.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'

import CartTotal from '../cart-total/cart-total'
import BurgerConstructorCard from '../burger-constructor-card/burger-constructor-card'

import {IngredientTypes, DNDTypes} from '../../utils/constants'
import {TIngredient, TCartIngredient, TDropCollectedProps} from '../../utils/types'

import { useSelector, useDispatch } from '../../services/hooks';
import { ADD_INGREDIENT } from '../../services/actions/burger-constructor';

import {v4 as uuidv4} from 'uuid'

import { useDrop } from 'react-dnd';
import { FC } from 'react';

const BurgerConstructor: FC = () => {

    const dispatch = useDispatch();

    const bunIngredient = useSelector( (store) => {
        return store.cart.cart.find((item: TCartIngredient) => item.type === IngredientTypes.bun);
    })

    const cartIngredients = useSelector( (store) => {
        return store.cart.cart.filter((item: TCartIngredient) => item.type !== "bun").sort((a: TCartIngredient, b: TCartIngredient) => {
            if (a.order > b.order) return 1;
            if (a.order === b.order) return 0;
            if (a.order < b.order) return -1;
            return 0;
          })
    });

    const total = useSelector( (store) => {

        let sum = 0;

        store.cart.cart.forEach( (item: TCartIngredient) => {
            if (item.type === IngredientTypes.bun) {
                sum += item.price * 2;
            } else {
                sum += item.price;
            }
        })
        return sum;
    });

      const addIngredient = (item: TIngredient) => {
        dispatch({
            type: ADD_INGREDIENT,
            ingredient: item,
            key: uuidv4()
          });
      };

      const [{ isHover }, dropTarget] = useDrop<TIngredient, unknown, TDropCollectedProps>({
        accept: DNDTypes.ingredient,
        collect: monitor => ({
          isHover: monitor.isOver()
        }),
        drop(item: TIngredient) { addIngredient(item); }
      });

      const className = `${burgerConstructorStyles.burger_constructor_list} ${
                             isHover ? burgerConstructorStyles.onHover : ''
                        }`;

      return (
        <section className={burgerConstructorStyles.burger_constructor} data-test="burger-constructor">

            <div className={className} ref={dropTarget} >
  
  
                <span className={burgerConstructorStyles.burger_bun} >
                    {bunIngredient && (
                        <ConstructorElement 
                            type="top"
                            isLocked={true}
                            text={`${bunIngredient.name} (верх)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image_mobile}     
                        />
                    )}
                </span>
       
        
                <div className={`${burgerConstructorStyles.burger_filling_list} ${commonStyles.custom_scrollbar}`} >

                    {cartIngredients.map((ingredient: TCartIngredient) => (            
                         <BurgerConstructorCard ingredient={ingredient} key={ingredient.key}/>
                    ))}
                </div>
 

              
                <span className={burgerConstructorStyles.burger_bun} >
                    {bunIngredient && (
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bunIngredient.name} (низ)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image_mobile}       
                        />
                    )}
                </span>
            
            
            </div>

            <CartTotal total={total}/>

        </section>
      );
    
  }

  
  export default BurgerConstructor 
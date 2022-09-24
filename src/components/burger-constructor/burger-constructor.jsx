
import burgerConstructorStyles from './burger-constructor.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components'

import CartTotal from '../cart-total/cart-total'
import BurgerConstructorCard from '../burger-constructor-card/burger-constructor-card'

import {v4 as uuidv4} from 'uuid'

import {IngredientTypes, DNDTypes} from '../../utils/constants'

import { useDispatch, useSelector } from 'react-redux';
import { ADD_INGREDIENT } from '../../services/actions/burger-constructor';

import { useDrop } from 'react-dnd';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const bunIngredient = useSelector( store => {
        return store.cart.cart.find(item => item.type === IngredientTypes.bun);
    })

    const cartIngredients = useSelector( store => {
        return store.cart.cart.filter((item) => item.type !== "bun").sort((a, b) => {
            if (a.order > b.order) return 1;
            if (a.order == b.order) return 0;
            if (a.order < b.order) return -1;
          })
    });

    const total = useSelector( store => {

        let sum = 0;

        store.cart.cart.forEach( (item) => {
            if (item.type === IngredientTypes.bun) {
                sum += item.price * 2;
            } else {
                sum += item.price;
            }
        })
        return sum;
    });

      const addIngredient = (item) => {
        dispatch({
            type: ADD_INGREDIENT,
            ingredient: item
          });
      };

      const [{ isHover }, dropTarget] = useDrop({
        accept: DNDTypes.ingredient,
        collect: monitor => ({
          isHover: monitor.isOver()
        }),
        drop(item) { addIngredient(item); }
      });

      const className = `${burgerConstructorStyles.burger_constructor_list} ${
                             isHover ? burgerConstructorStyles.onHover : ''
                        }`;

      return (
        <section className={burgerConstructorStyles.burger_constructor}>

            <div className={className} ref={dropTarget} >
  
                {bunIngredient && (
                    <span className={burgerConstructorStyles.burger_bun} >
                        <ConstructorElement 
                            type="top"
                            isLocked={true}
                            text={`${bunIngredient.name} (верх)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image_mobile}     
                        />
                    </span>
                )}

        
                <div className={`${burgerConstructorStyles.burger_filling_list} ${commonStyles.custom_scrollbar}`} >

                    {cartIngredients.map((ingredient) => (            
                         <BurgerConstructorCard ingredient={ingredient} key={uuidv4()}/>
                    ))}
                </div>
 

                {bunIngredient && (
                    <span className={burgerConstructorStyles.burger_bun} >
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bunIngredient.name} (низ)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image_mobile}       
                        />
                    </span>
                )}

            </div>

            <CartTotal total={total}/>

        </section>
      );
    
  }

  
  export default BurgerConstructor 
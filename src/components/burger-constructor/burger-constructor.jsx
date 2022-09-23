import React from 'react' 

import burgerConstructorStyles from './burger-constructor.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import CartTotal from '../cart-total/cart-total'

import {v4 as uuidv4} from 'uuid'

import {IngredientTypes} from '../../utils/constants'

import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_INGREDIENT } from '../../services/actions/actions';


function BurgerConstructor() {

    const dispatch = useDispatch();

    const cart = useSelector(store => store.cart);

    const bunIngredient = useSelector( store => {
        return store.cart.find(item => item.type === IngredientTypes.bun);
    })

    const cartIngredients = useSelector( store => {

        let ingredients = [];

        store.cart.forEach( (item) => {
            if (item.type !== IngredientTypes.bun) {
                for (let i = 0; i < item.count; i++) {
                    ingredients.push(item);
                }
            } 
        })
        return ingredients
    });

    const total = useSelector( store => {

        let sum = 0;

        store.cart.forEach( (item) => {
            if (item.type === IngredientTypes.bun) {
                sum += item.price * 2;
            } else {
                sum += item.price * item.count;
            }
        })
        return sum;
    });


      const handleRemoveIngredient = (ingredientId) => {
        dispatch(
          {
            type: REMOVE_INGREDIENT,
            ingredientId: ingredientId
          } );
      };

    

      return (
        <section className={burgerConstructorStyles.burger_constructor}>


            <div className={burgerConstructorStyles.burger_constructor_list} >
  
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


        
                <div className={`${burgerConstructorStyles.burger_filling_list} ${commonStyles.custom_scrollbar}`}>

                    {cartIngredients.map((ingredient) => (
                       
                      
                            <span className={`${burgerConstructorStyles.burger_filling} m-2`} key={uuidv4()}>
                                <DragIcon type="primary"/>
                                <ConstructorElement
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image_mobile}   
                                    handleClose={() => handleRemoveIngredient(ingredient._id)}                          
                                />
                            </span>
                       
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
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


    function getBunIngredient()
    {
        return cart.find(item => item.type === IngredientTypes.bun);
    }
    const bunIngredient = React.useMemo( getBunIngredient, [cart, getBunIngredient]);   


    function getTotalReducer()
    {
        const sum = bunIngredient ? (bunIngredient.price * 2) : 0;

        return cart.reduce((sum, item) => ( 
            (item.type !== IngredientTypes.bun) ? (sum + item.price) : sum), sum);  
    }
    
    const [total, totalDispatcher] = React.useReducer(getTotalReducer, 0, undefined);

    React.useEffect( totalDispatcher, [cart]  );


  /*  const total = useSelector( state => {

        let sum = 0;

        state.cart.forEach( (item) => {
            if (item.type === IngredientTypes.bun)
            {
                sum += item.price * 2;
            } else {
                sum += item.price * item.count;
            }
        })
        return sum;
    });*/


      const onCardClick = () => {
        dispatch(
          {
            type: REMOVE_INGREDIENT,
            ingredient: cart[0]
          }
        );
      };
    

      return (
        <section className={burgerConstructorStyles.burger_constructor}>


            <div className={burgerConstructorStyles.burger_constructor_list} >
  
                {bunIngredient && (
                    <span className={burgerConstructorStyles.burger_bun} onClick={onCardClick}    >
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

                    {cart.map((ingredient) => (
                        (ingredient.type !== IngredientTypes.bun) && (
                            <span className={`${burgerConstructorStyles.burger_filling} m-2`} key={uuidv4()}>
                                <DragIcon type="primary"/>
                                <ConstructorElement
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image_mobile}                                 
                                />
                            </span>
                        )
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
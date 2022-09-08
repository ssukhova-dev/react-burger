import PropTypes from 'prop-types';

import burgerConstructorStyles from './burger-constructor.module.css';
import ingredientPropType from './../../utils/prop-types.jsx'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import CartTotal from '../cart-total/cart-total'

import ImgBun from './../../images/bun-02.svg'


function BurgerConstructor(props) {

      return (
        <section className={burgerConstructorStyles.burger_constructor}>


            <div className={burgerConstructorStyles.burger_constructor_list} >
  
                <span className={burgerConstructorStyles.burger_bun} >
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={ImgBun}
                    />
                </span>


                <div className={burgerConstructorStyles.burger_filling_list}>

                    {props.ingredients.map((ingredient) => (

                            <span className={`${burgerConstructorStyles.burger_filling} m-2`} key={ingredient._id}>
                                <DragIcon type="primary"/>
                                <ConstructorElement
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image_mobile}                                 
                                />
                            </span>
                        ))}

                
                </div>

                  
                <span className={burgerConstructorStyles.burger_bun}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={ImgBun}
                    />
                </span>  

            </div>


            <CartTotal total={100}/>


        </section>
      );
    
  }

  BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType)
  };
  
  export default BurgerConstructor 
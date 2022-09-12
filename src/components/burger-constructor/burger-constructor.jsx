import React from 'react' 
import PropTypes from 'prop-types';

import burgerConstructorStyles from './burger-constructor.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import ingredientPropType from './../../utils/prop-types.jsx'

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import CartTotal from '../cart-total/cart-total'

import ImgBun from './../../images/bun-02.svg'

import {v4 as uuidv4} from 'uuid'

import {IngredientsContext, SelectedIngredientsContext} from '../../utils/context'


function BurgerConstructor() {

    const ingredients = React.useContext(IngredientsContext);
    const {selectedIngredients, setSelectedIngredients} = React.useContext(SelectedIngredientsContext);

    setSelectedIngredients(ingredients);//временное решение
    console.log(selectedIngredients);


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


        
                <div className={`${burgerConstructorStyles.burger_filling_list} ${commonStyles.custom_scrollbar}`}>

                    {ingredients.map((ingredient) => (

                            <span className={`${burgerConstructorStyles.burger_filling} m-2`} key={uuidv4()}>
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
    
  };
  
  export default BurgerConstructor 
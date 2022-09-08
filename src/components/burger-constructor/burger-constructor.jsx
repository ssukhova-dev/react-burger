import PropTypes from 'prop-types';

import burgerConstructorStyles from './burger-constructor.module.css';
import {ConstructorElement, Button, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'


import ImgBun from './../../images/bun-02.svg'



function BurgerConstructor(props) {


    const CartTotal = ({ total }) => {
        return (
            <section className={burgerConstructorStyles.cart_total}>

                <div className={burgerConstructorStyles.price_module}>
                    <p className="text text_type_digits-medium">
                        {total}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>  
        
                <Button type="primary" size="medium" >
                    Оформить заказ
                </Button>
            </section>
        );
    };


   
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

                    {props.ingredients.map((ingredient, index) => (

                            <span className={`${burgerConstructorStyles.burger_filling} m-2`} key={index}>
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


            <CartTotal total='100'/>


        </section>
      );
    
  }

  BurgerConstructor.propTypes = {
    ingredients: PropTypes.array
  };
  
  export default BurgerConstructor 
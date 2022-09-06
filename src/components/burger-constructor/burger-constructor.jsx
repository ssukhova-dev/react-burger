import PropTypes from 'prop-types';

import burgerConstructor from './burger-constructor.module.css';
import {ConstructorElement, Button, DragIcon, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'


import ImgBun from './../../images/bun-02.svg'



function BurgerConstructor(props) {


    const CartTotal = ({ total }) => {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', flexDirection: 'row', gap: '10px'}}>
                <p className="text text_type_digits-medium">
                    {total}
                </p>
                
                <CurrencyIcon type="primary" />
                <div style={{ width: '20px'}}/>
                <Button type="primary" size="medium" >
                    Оформить заказ
                </Button>
            </div>
        );
    };


   
      return (
        <section className={burgerConstructor.burger_constructor}>


            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: '32px', marginBottom: '40px' }}>

                <span className="mr-5 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <div style={{ width: '32px'}}/>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={ImgBun}
                    />
                </span>


                <div className={burgerConstructor.burger_filling}>

                    {props.ingredients.map((ingredient, index) => (

                            <span className="ml-2 mr-2 mb-2 mt-2"  key={index} style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                text={ingredient.name}
                                price={ingredient.price}
                                thumbnail={ingredient.image_mobile}
                            />
                            </span>
                        ))}

                
                </div>

                  
                <span className="mr-5 mb-2 mt-2" style={{ display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: '10px'}}>
                    <div style={{ width: '32px'}}/>
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
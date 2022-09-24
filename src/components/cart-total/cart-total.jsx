import React from 'react' 
import PropTypes from 'prop-types';

import cartTotalStyles from './cart-total.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'

import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'


import { useDispatch, useSelector } from 'react-redux';
import { getOrders, CLOSE_ORDER_DETAILS } from '../../services/actions/cart-total';


function CartTotal({ total }) {

    const isOrderDetailOpen = useSelector(store => store.order.isOrderDetailOpen);
    const cart = useSelector(store => store.cart.cart);

    const dispatch = useDispatch();

    function handleClickMakeOrder()
    {
        const ingredients = [] ; 

        cart.forEach((ingredient) => {
            ingredients.push(ingredient._id);
          })

          dispatch(getOrders(ingredients));

    }

    function handleCloseOrderDetail() {
        dispatch({
            type: CLOSE_ORDER_DETAILS
          });
      }

        return (
            <>
            <section className={cartTotalStyles.cart_total}>

                <div className={cartTotalStyles.price_module}>
                    <p className="text text_type_digits-medium">
                        {total}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>  
        
                <Button type="primary" size="medium"  onClick={handleClickMakeOrder}>
                    Оформить заказ
                </Button>
            </section>

            {
                isOrderDetailOpen && (
                    <Modal onClose={handleCloseOrderDetail}>
                        <OrderDetails/>
                    </Modal>
                )
            }

            </>
        );


        };

    CartTotal.propTypes = {
        total: PropTypes.number.isRequired
  };
  
  export default CartTotal 
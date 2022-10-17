import React from 'react' 
import PropTypes from 'prop-types';

import cartTotalStyles from './cart-total.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'

import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'
import {IngredientTypes} from '../../utils/constants'

import { useDispatch, useSelector } from 'react-redux';
import { getOrders, CLOSE_ORDER_DETAILS } from '../../services/actions/cart-total';
import { isLoggedInSelector } from '../../services/actions/login';

import { useHistory} from "react-router-dom"

function CartTotal({ total }) {

    const isLoggedIn = useSelector(isLoggedInSelector);
    const history = useHistory();

    const isOrderDetailOpen = useSelector(store => store.order.isOrderDetailOpen);
    const cart = useSelector(store => store.cart.cart);

    const bunIngredient = useSelector( store => {
        return store.cart.cart.find(item => item.type === IngredientTypes.bun);
    })

    const dispatch = useDispatch();

    function handleClickMakeOrder()
    {
        if (isLoggedIn) {
            const ingredients = [] ; 

            cart.forEach((ingredient) => {
                ingredients.push(ingredient._id);
            })

            dispatch(getOrders(ingredients));
        } else {
            history.replace("/login");
        }
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
        
                <Button type="primary" size="medium"  onClick={handleClickMakeOrder} disabled={!bunIngredient}>
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
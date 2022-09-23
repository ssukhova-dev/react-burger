import React from 'react' 
import PropTypes from 'prop-types';

import cartTotalStyles from './cart-total.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'

import useModal from '../modal/use-modal'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'

import { getOrders} from '../../utils/burger-api' 

import { useDispatch, useSelector } from 'react-redux';
import { ADD_ORDER } from '../../services/actions/actions';


function CartTotal({ total }) {

    const orderDetailsDlg = useModal();

    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    function handleClickMakeOrder()
    {
        const ingredients = [] ; 

        cart.forEach((ingredient) => {
            ingredients.push(ingredient._id);
          })
 

        getOrders(ingredients).then((data) => {

            if (data.success === true) {
                dispatch({
                    type: ADD_ORDER,
                    order: data.order.number
                })    
            } 
            else{
                throw("не удалось сделать заказ");
            }
        })
        .then(() => {
            orderDetailsDlg.open();
        })
        .catch(e => {
            console.log(e);
        })


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
                orderDetailsDlg.isOpen && (
                    <Modal onClose={orderDetailsDlg.requestClose}>
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
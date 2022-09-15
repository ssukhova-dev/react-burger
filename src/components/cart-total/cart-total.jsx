import React from 'react' 
import PropTypes from 'prop-types';

import cartTotalStyles from './cart-total.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'

import useModal from '../modal/use-modal'
import OrderDetails from '../order-details/order-details'
import Modal from '../modal/modal'

import {SelectedIngredientsContext} from '../../utils/context'

import { getOrders} from '../../utils/burger-api' 


function CartTotal({ total }) {

    const orderDetailsDlg = useModal();

    const {selectedIngredients} = React.useContext(SelectedIngredientsContext);

    const [order, setOrder] = React.useState(null);

  
    function handleClickMakeOrder()
    {
        const ingredients = [] ; 

        selectedIngredients.forEach((ingredient) => {
            ingredients.push(ingredient._id);
          })


        getOrders(ingredients).then((data) => {

            if (data.success === true) {
                setOrder(data.order.number);
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
                        <OrderDetails orderId={order}/>
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
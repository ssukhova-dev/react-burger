import PropTypes from 'prop-types';

import cartTotalStyles from './cart-total.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'

import useModal from '../modal/use-modal'
import OrderDetails from '../order-details/order-details'

function CartTotal({ total }) {

    const orderDetailsDlg = useModal();

        return (
            <>
            <section className={cartTotalStyles.cart_total}>

                <div className={cartTotalStyles.price_module}>
                    <p className="text text_type_digits-medium">
                        {total}
                    </p>
                    <CurrencyIcon type="primary" />
                </div>  
        
                <Button type="primary" size="medium"  onClick={orderDetailsDlg.open}>
                    Оформить заказ
                </Button>
            </section>

            <OrderDetails {...orderDetailsDlg.modalProps} orderId={55555} />

            </>
        );


        };

    CartTotal.propTypes = {
        total: PropTypes.number.isRequired
  };
  
  export default CartTotal 
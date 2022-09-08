import PropTypes from 'prop-types';

import cartTotalStyles from './cart-total.module.css';

import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'


function CartTotal({ total }) {

        return (
            <section className={cartTotalStyles.cart_total}>

                <div className={cartTotalStyles.price_module}>
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

    CartTotal.propTypes = {
        total: PropTypes.number
  };
  
  export default CartTotal 
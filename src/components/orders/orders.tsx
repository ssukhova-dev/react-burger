import React, { FC } from 'react' 

import styles from './orders.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {IngredientTypes} from '../../utils/constants'
import { useSelector, useDispatch } from '../../services/hooks';
import { TIngredient, TOrder } from '../../utils/types';
import OrderCard from '../order-card/order-card';

interface IOrdersProps{
    orderInfoDlgOpen: (order: TOrder) => void;
}

const Orders: FC<IOrdersProps> = ({ orderInfoDlgOpen }) => {
  
    const dispatch = useDispatch();
   

    const listRef = React.useRef<HTMLDivElement>(null);


    const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);
    const { feedOrders } = useSelector(store => store.feed);

   

    return (
        <>
        <section className={styles.orders}>

            <p className={`${styles.title} text text_type_main-large p-5`} >
                Лента заказов
            </p>

            <div className={`${styles.orders_list} ${commonStyles.custom_scrollbar}`} ref={listRef}>
  
                {feedOrders && feedOrders.map((order) => (
                        <OrderCard key={order._id} order={order} orderInfoDlgOpen={orderInfoDlgOpen} />
                    ))}
            </div>

        </section>
        </>
    );
  }

  export default Orders; 
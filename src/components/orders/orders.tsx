import React, { FC } from 'react' 

import styles from './orders.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import { useSelector } from '../../services/hooks';
import { TOrder } from '../../utils/types';
import OrderCard from '../order-card/order-card';

interface IOrdersProps{
    orderInfoDlgOpen: (order: TOrder) => void;
    feedPage?: boolean;
}

const Orders: FC<IOrdersProps> = ({ orderInfoDlgOpen, feedPage = true }) => {
  
    const listRef = React.useRef<HTMLDivElement>(null);
    const orders = useSelector(store => { return feedPage ? store.feed.feedOrders : store.profileOrders.orders});
                              
    return (
        <>
        <section className={styles.orders}>

        {feedPage && (
            <p className={`${styles.title} text text_type_main-large p-5`} >
                Лента заказов
            </p>
        )}

            <div className={`${styles.orders_list} ${commonStyles.custom_scrollbar}`} ref={listRef}>
  
                {orders && orders.map((order) => (
                        <OrderCard key={order._id} order={order} orderInfoDlgOpen={orderInfoDlgOpen} feedPage={feedPage}/>
                    ))}
            </div>

        </section>
        </>
    );
  }

  export default Orders; 
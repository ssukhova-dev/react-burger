import React, { FC } from 'react' 

import styles from './feed-info.module.css';

import { useSelector, useDispatch } from '../../services/hooks';




const FeedInfo: FC = () => {
  
    const {total, totalToday} = useSelector(store => store.feed);

    const {doneOrders, inProgressOrders} = useSelector((store) => {

        let doneOrders: number[] = [];
        let inProgressOrders: number[] = [];

        store.feed.feedOrders.forEach((order) => {
            
            if (order.status === "done"){
                doneOrders.push(order.number);
            } else if (order.status === "pending"){
                inProgressOrders.push(order.number);
            }

          });
          doneOrders = doneOrders.slice(0,30);
          inProgressOrders = inProgressOrders.slice(0,30);

          return {doneOrders, inProgressOrders};
    });
   

    return (

        <section className={styles.content}>
            <div className={styles.orders_status}>
                <p className={"text text_type_main-medium"}>Готовы: </p>
                <p className={"text text_type_main-medium"}>В работе:  </p>
                
                <div className={styles.done_orders}>
                    <ul className={styles.orders_list}>
                    {
                        doneOrders.slice(0,10).map((order, index) => (
                        <li key={index}>
                            <p className={"text text_type_digits-default"}>{order}</p>
                        </li>
                        ))
                    }
                    </ul>
                    <ul className={styles.orders_list}>
                    {
                        doneOrders.slice(10,20).map((order, index) => (
                        <li key={index}>
                            <p className={"text text_type_digits-default"}>{order}</p>
                        </li>
                        ))
                    }
                    </ul>
                    <ul className={styles.orders_list}>
                    {
                        doneOrders.slice(20,30).map((order, index) => (
                        <li key={index}>
                            <p className={"text text_type_digits-default"}>{order}</p>
                        </li>
                        ))
                    }
                    </ul>
                </div>

                <div className={styles.inprogress_orders}>
                    <ul className={styles.orders_list}>
                    {
                        inProgressOrders.map((order, index) => (
                        <li key={index}>
                            <p className={"text text_type_digits-default"}>{order}</p>
                        </li>
                        ))
                    }
                    </ul>
                </div>

            </div>
            <div>
                <p className={"text text_type_main-medium mt-10"}>Выполнено за все время:</p>
                <p className={"text text_type_digits-large"}> {total} </p>
                <p className={"text text_type_main-medium mt-5"}>Выполнено за сегодня:</p>
                <p className={"text text_type_digits-large"}> {totalToday} </p>
            </div>
        </section>
 
    );
  }

  export default FeedInfo; 

import styles from '../../components/ingredient-details/ingredient-details.module.css';
import { FC } from 'react';
import OrderInfo from '../../components/order-info/order-info';
import { useDispatch, useSelector } from '../../services/hooks';
import { TIngredient, TOrder } from '../../utils/types';
import { useParams } from 'react-router-dom';
import React from 'react';
import { ADD_CURRENT_ORDER } from '../../services/actions/order';
import { WS_FEED_ORDERS_URL, WS_PROFILE_ORDERS_URL } from '../../utils/burger-api';
import { wsOrdersConnect, wsOrdersDisconnect } from '../../services/actions/socket';
import { LOADING_TEXT } from '../../utils/constants';
import { wsProfileOrdersConnect, wsProfileOrdersDisconnect } from '../../services/actions/profile-socket';
import JsCookie from "js-cookie"
import { Token } from '../../utils/constants';

interface IOrderInfoPageProps{
    profileOrder?: boolean;
  }
  
const OrderInfoPage: FC<IOrderInfoPageProps> = ({profileOrder = false}) => {

    console.log("OrderInfoPage");

    const dispatch = useDispatch();

    const {id}: {id: string} = useParams();
    const order: TOrder | null = useSelector((store) => store.currentOrder.currentOrder);
    const orders = useSelector(store => { return profileOrder ? store.profileOrders.orders : store.feed.feedOrders });
    
    const { loading} = useSelector(state => state.feed);

    React.useEffect(() => {
        if (profileOrder) {
            const accessToken = JsCookie.get(Token.access)!.replace("Bearer ", "");
            dispatch(wsProfileOrdersConnect(WS_PROFILE_ORDERS_URL + `?token=${accessToken}`));
        } else {
            dispatch(wsOrdersConnect(WS_FEED_ORDERS_URL));
        }
        return () => {
          dispatch(profileOrder? wsProfileOrdersDisconnect(): wsOrdersDisconnect());
        }
      }, [dispatch]);


    React.useEffect(() => {
        if (!order && id && orders) {
            const order = orders.find((ord) => ord._id === id);
            if (order) {
                dispatch({
                    type: ADD_CURRENT_ORDER,
                    order: order
                });
            }
        }
      }, [order, id, orders, dispatch]);

    return (
        loading ? (
            <section className={styles.loading}>
                {LOADING_TEXT}
            </section> 
        ) : (
            order ? (
                <main className={styles.pageContent}>
          
                    <div className={styles.title}>
                        <p className="text text_type_digits-default">
                            #{order.number}
                        </p>
                
                    </div>

                    <OrderInfo />
                </main>
            ):(
                <></>
            )
        )
    );
}



export default OrderInfoPage
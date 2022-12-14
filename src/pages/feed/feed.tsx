import { FC } from 'react';
import React from 'react';
import FeedInfo from '../../components/feed-info/feed-info';
import Orders from '../../components/orders/orders';
import { useDispatch, useSelector } from '../../services/hooks';
import styles from './feed.module.css';
import { wsOrdersConnect, wsOrdersDisconnect } from '../../services/actions/socket';
import { WS_FEED_ORDERS_URL } from '../../utils/burger-api';
import { LOADING_TEXT } from '../../utils/constants';
import { TOrder } from '../../utils/types';


interface IFeedPageProps{
    orderInfoDlgOpen: (order: TOrder) => void;
}

const FeedPage: FC<IFeedPageProps> = ({ orderInfoDlgOpen }) => {
 
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(wsOrdersConnect(WS_FEED_ORDERS_URL));
        return () => {
          dispatch(wsOrdersDisconnect());
        }
      }, [dispatch]);

    const { loading } = useSelector(state => state.feed);


    return (
        loading ? (
            <section className={styles.loading}>
                {LOADING_TEXT}
            </section> 
        ) : (

            <section className={styles.content}>
                <Orders orderInfoDlgOpen={orderInfoDlgOpen}/>
                <FeedInfo />
            </section> 
        )
    )
}

export default FeedPage;
import { FC } from 'react';
import FeedInfo from '../../components/feed-info/feed-info';
import Orders from '../../components/orders/orders';
import styles from './feed.module.css';


const FeedPage: FC = () => {


    return (
        <section className={styles.content}>
            <Orders />
            <FeedInfo />
        </section> 
    )
}

export default FeedPage;
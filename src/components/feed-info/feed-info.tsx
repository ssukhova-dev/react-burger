import React, { FC } from 'react' 

import styles from './feed-info.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {IngredientTypes} from '../../utils/constants'
import { useSelector, useDispatch } from '../../services/hooks';
import { TIngredient } from '../../utils/types';

  
const OrderCard: FC = () => {


    return (
        <section className={styles.app_loading}>
                    feed info
        </section> 
    )
}


const FeedInfo: FC = () => {
  
    const dispatch = useDispatch();
   

    const listRef = React.useRef<HTMLDivElement>(null);


    const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);


   

    return (
        <>
        <section className={styles.orders}>


            <div className={`${styles.orders_list} ${commonStyles.custom_scrollbar}`} ref={listRef}>
                <OrderCard />
            </div>

        </section>
        </>
    );
  }

  export default FeedInfo; 
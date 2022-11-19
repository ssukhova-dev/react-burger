import styles from './order-info.module.css';
import commonStyles from  './../../utils/common-styles.module.css';
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from '../../services/hooks';
import { FC } from 'react';
import { TIngredient, TOrder } from '../../utils/types';
import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { getPrice } from '../../utils';
import { ADD_CURRENT_ORDER } from '../../services/actions/order';
import IngredientCardList from '../ingredient-card-list.tsx/ingredient-card-list';


const OrderInfo: FC = () => {

    const dispatch = useDispatch();

    const {id}: {id: string} = useParams();
    const order: TOrder | null = useSelector((store) => store.currentOrder.currentOrder);
    const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);
    const feedOrders: Array<TOrder> = useSelector((store) => store.feed.feedOrders);

    const price = React.useMemo(() => getPrice(order, ingredients), [order, ingredients]) ;
    const date = order ? (new Date(order.createdAt)).toLocaleString() : "";


    React.useEffect(() => {
        if (!order && id && feedOrders) {
            const order = feedOrders.find((ord) => ord._id === id);
            if (order) {
                dispatch({
                    type: ADD_CURRENT_ORDER,
                    order: order
                });
            }
        }
      }, [order, id, feedOrders, dispatch]);

    const status = order ? ((order.status === "done")? "Выполнен" : "Готовится"   ) : "";

    return (
        order ? (
        <div className={styles.content_body}>

            <p className={`${styles.name} text text_type_main-medium`}  >
                {order.name}
            </p>

            <p className={`${styles.status} text text_type_main-small`}  >
                {status}
            </p>

            <p className={`${styles.name} text text_type_main-medium`}  >
                Состав:
            </p>


            <div className={`${styles.ingredients_list} ${commonStyles.custom_scrollbar}`} >
                <IngredientCardList orderIngredients={order.ingredients}/>
            </div>

            
            <div className={styles.footer} >
                <p className="text text_type_main-default text_color_inactive" >
                    {date}
                </p>

                <div className={`${styles.price} ml-6`}>
                      <p className={"text text_type_digits-default mr-2"}>{price}</p>
                      <CurrencyIcon type="primary" />
                </div>
            </div>

     
            
        </div>
        ):(
            <></>
        )
    )

}


export default OrderInfo;
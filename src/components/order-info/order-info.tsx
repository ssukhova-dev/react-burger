import styles from './order-info.module.css';
import commonStyles from  './../../utils/common-styles.module.css';
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from '../../services/hooks';
import { FC } from 'react';
import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { gerOrderStatus, getPrice } from '../../utils';
import { ADD_CURRENT_ORDER } from '../../services/actions/order';
import IngredientCardList from '../ingredient-card-list.tsx/ingredient-card-list';


interface IOrderInfoProps{
    profileOrder: boolean;
  }

const OrderInfo: FC<IOrderInfoProps> = ({profileOrder = false}) => {

    const dispatch = useDispatch();

    const {id}: {id: string} = useParams();
    const order = useSelector((store) => store.currentOrder.currentOrder);
    const ingredients = useSelector((store) => store.ingredients.ingredients);
    const orders = useSelector(store => { return profileOrder ? store.profileOrders.orders : store.feed.feedOrders });
    

    const price = React.useMemo(() => getPrice(order, ingredients), [order, ingredients]) ;

   const date =  order ? new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'long', timeZone: 'Europe/Volgograd' }).format(new Date(order.createdAt)) : "";

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

    const status = gerOrderStatus(order);

    return (
        order ? (
        <>
            <div className={styles.title}>
                <p className="text text_type_digits-medium">
                    #{order.number}
                </p>
            </div>

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
        </>
        ):(
            <></>
        )
    )

}


export default OrderInfo;
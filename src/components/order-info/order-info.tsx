import styles from './order-info.module.css';
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from '../../services/hooks';
import { FC } from 'react';
import { TIngredient, TOrder } from '../../utils/types';
import React from 'react';

const OrderInfo: FC = () => {

    const dispatch = useDispatch();

    const {id}: {id: string} = useParams();
    const order: TOrder | null = useSelector((store) => store.currentOrder.currentOrder);
    const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);

  /*  React.useEffect(() => {
        if (!ingredient && id && ingredients) {
            const ingredient = ingredients.find((ingr) => ingr._id === id);
            if (ingredient) {
                dispatch({
                    type: ADD_CURRENT_INGREDIENT,
                    ingredient: ingredient
                });
            }
        }
      }, [ingredient, id, ingredients, dispatch]);*/

    return (
        <div className={styles.content_body}>

            <p className="text text_type_digits-large m-5" >
               
            </p>

            <p className="text text_type_main-medium m-5" >
                идентификатор заказа
            </p>

            <div className={styles.done_img}>
                    
            </div>  

            <p className="text text_type_main-default  m-2" >
                Ваш заказ начали готовить
            </p>

            <p className="text text_type_main-default text_color_inactive" >
                Дождитесь готовности на орбитальной станции
            </p>
            
        </div>
    )

}


export default OrderInfo;
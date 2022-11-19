import { TCartIngredient, TIngredient, TOrder } from '../../utils/types';
import styles from './order-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../services/hooks';
import {useHistory, useLocation} from "react-router-dom"
import { FC } from 'react';
import React from 'react';
import { gerOrderStatus, getPrice } from '../../utils';

interface IOrderCardProps{
  order: TOrder;
  orderInfoDlgOpen: (order: TOrder) => void;
  feedPage?: boolean;
}

const OrderCard: FC<IOrderCardProps> = ({order, orderInfoDlgOpen, feedPage = true}) => {

      const history = useHistory();
      const location = useLocation();

      const onCardClick = () => {

        const url = feedPage ? "/feed/" : "/profile/orders/";
        history.push(url + order._id, {background: location});

        orderInfoDlgOpen(order);
      };

      const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);

      function getIcons(){
        const icons: Array<string> = [];

        order.ingredients.forEach((ingredient_id) => {
          ingredients.forEach((ingredient) => {
            if (ingredient._id === ingredient_id) {            
              icons.push(ingredient.image_mobile);
            }
          });
        })
        return icons.slice(0,6);
      }


      const ingredient_icons = React.useMemo(() => getIcons(), [ingredients])!;
      const rest = order.ingredients.length > 6 ? order.ingredients.length - 6 : 0;

      const price = React.useMemo(() => getPrice(order, ingredients), [ingredients]);

      const status = gerOrderStatus(order);

      const createdAtStr = order.createdAt;
      const date = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'long', timeZone: 'Europe/Volgograd' }).format(new Date(createdAtStr));

      return (
              <div className={styles.order_card} onClick={onCardClick} >

                  <div className={styles.header}>
                    <p className={"text text_type_digits-default"}>{`#${order.number}`}</p>
                    <p className={"text text_type_main-default text_color_inactive"}>{date}</p>
                  </div>

                  <p className={`${styles.name} text text_type_main-medium mt-6`}>{order.name}</p>

                
                  <p className={`${styles.status} text text_type_main-small `}  >
                      {feedPage ? " " : status}
                  </p>
      

                  <div className={`${styles.container} mt-2`}>
                    
                    <ul className={styles.img_list}>
                    {
                      ingredient_icons && ingredient_icons.map((img, index) => (
                        <li key={index}>
                          <div className={styles.img_container} >
                            <img className={styles.image} src={img} alt={img} />
                            {(!!rest && index === 5) && (
                              <p className={`${styles.overlay} text text_type_main-default`}>{`+${rest}`}</p>
                            )}
                          </div>                        
                        </li>
                      ))
                    }
                    </ul>
                    
                    
                    <div className={`${styles.price} ml-6`}>
                      <p className={"text text_type_digits-default mr-2"}>{price}</p>
                      <CurrencyIcon type="primary" />
                    </div>
                  </div>

              </div>
    
      );
  
  }

  export default OrderCard 

import { TCartIngredient, TIngredient, TOrder, TOrderIngredient } from '../../utils/types';


import styles from './ingredient-card.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import { FC } from 'react';

interface IIngredientCardProps{
  name: string;
  img: string;
  price: number;
  count: number;
}

const IngredientCard: FC<IIngredientCardProps> = ({name, img, price, count}) => {

      return (
              <div className={styles.ingredient_card} >

                <div className={styles.name_container}>
                  <div className={styles.img_container} >
                    <img className={styles.image} src={img} alt={img} />
                  </div>

                  <p className={`${styles.name} text text_type_main-small`}  >
                      {name}
                  </p>      
                </div>

                <div className={`${styles.price} ml-6`}>
                  <p className={"text text_type_digits-default mr-2"}>{count} x {price}</p>
                  <CurrencyIcon type="primary" />
                </div>               
              </div>
      );
  }

  export default IngredientCard 
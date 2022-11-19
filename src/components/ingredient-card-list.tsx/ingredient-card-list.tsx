
import { TIngredient, TOrderIngredient } from '../../utils/types';

import styles from './ingredient-card-list.module.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from '../../services/hooks';

import { FC } from 'react';
import React from 'react';

import IngredientCard from '../ingredient-card/ingredient-card';
import {v4 as uuidv4} from 'uuid'

interface IIngredientCardListProps{
    orderIngredients: string[];
}

const IngredientCardList: FC<IIngredientCardListProps> = ({orderIngredients}) => {

      const allIngredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);


      const summarizeIngredients = (orderIngredients: string[], allIngredients: TIngredient[]) => {
        const result: TOrderIngredient[] = [];
      
        allIngredients.forEach((item) => {

            const foundedIngredients: string[] = orderIngredients.filter( (id: string) => item._id === id);
            if (foundedIngredients.length > 0) {

                let ingr: TOrderIngredient = {...item, count: foundedIngredients.length};
                result.push(ingr);
            } 
        })

        return result;
      };
      
      const ingredients: TOrderIngredient[] = React.useMemo(() => summarizeIngredients(orderIngredients, allIngredients), [orderIngredients, allIngredients]);

      return (
        <>
     
                {ingredients.map((ingredient) => (
                    <IngredientCard key={uuidv4()} 
                                name={ingredient.name} 
                                img={ingredient.image_mobile} 
                                price={ingredient.price} 
                                count={ingredient.count}/>
                ))}
              

</>
      );
  
  }

  export default IngredientCardList
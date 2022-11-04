 
import React from 'react' 

import burgerIngCategoryStyles from './burger-ingredient-category.module.css';
import BurgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card'
import { TIngredient } from '../../utils/types';


interface IBurgerIngredientCategoryProps{
  caption: string;
  ingredientDetailsDlgOpen: (ingredient: TIngredient) => void;
  ingredients?: Array<TIngredient>;
}

const BurgerIngredientCategory = React.forwardRef<HTMLParagraphElement, IBurgerIngredientCategoryProps>((props, ref) => {

      return (
              <div className={burgerIngCategoryStyles.burger_ingredient_category}>

                <p className={`${burgerIngCategoryStyles.burger_ingredient_category_caption} text text_type_main-medium p-5`} ref={ref}>
                    {props.caption}
                </p>

                <div className={burgerIngCategoryStyles.burger_ingredient_list}>
                   
                    {props.ingredients && props.ingredients.map((ingredient) => (
                        <BurgerIngredientCard key={ingredient._id}
                        ingredient={ingredient} ingredientDetailsDlgOpen={props.ingredientDetailsDlgOpen}
                        />
                    ))}


                </div>
              </div>
      );
    
  })
   
  export default BurgerIngredientCategory 
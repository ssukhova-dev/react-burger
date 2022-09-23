import PropTypes from 'prop-types';
import React from 'react' 

import burgerIngCategoryStyles from './burger-ingredient-category.module.css';
import ingredientPropType from './../../utils/prop-types.jsx'
import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'


const BurgerIngredientCategory = React.forwardRef((props, ref) =>  {
 

      return (
              <div className={burgerIngCategoryStyles.burger_ingredient_category}>

                <p className={`${burgerIngCategoryStyles.burger_ingredient_category_caption} text text_type_main-medium p-5`} ref={ref}>
                    {props.caption}
                </p>

                <div className={burgerIngCategoryStyles.burger_ingredient_list}>
                   
                    {props.ingredients.map((ingredient) => (
                        <BurgerIngredientCard key={ingredient._id}
                        ingredient={ingredient} ingredientDetailsDlgOpen={props.ingredientDetailsDlgOpen}
                        />
                    ))}


                </div>
              </div>
      );
    
  })

  BurgerIngredientCategory.propTypes = {
    caption: PropTypes.string.isRequired,
    ingredientDetailsDlgOpen: PropTypes.func.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropType)
  };
   
  export default BurgerIngredientCategory 
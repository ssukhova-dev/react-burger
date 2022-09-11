import PropTypes from 'prop-types';

import burgerIngCategoryStyles from './burger-ingredient-category.module.css';
import ingredientPropType from './../../utils/prop-types.jsx'
import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'



function BurgerIngredientCategory (props) {


 

      return (
              <div className={burgerIngCategoryStyles.burger_ingredient_category}>

                <p className={`${burgerIngCategoryStyles.burger_ingredient_category_caption} text text_type_main-medium p-5`}>
                    {props.caption}
                </p>

                <div className={burgerIngCategoryStyles.burger_ingredient_list}>
                   
                    {props.ingredients.map((ingredient) => (
                        <BurgerIngredientCard key={ingredient._id}
                        ingredient={ingredient} ingredientDetailsDlgRequest={props.ingredientDetailsDlgRequest}
                        />
                    ))}


                </div>
              </div>
      );
    
  }

  BurgerIngredientCategory.propTypes = {
    caption: PropTypes.string.isRequired,
    ingredientDetailsDlgRequest: PropTypes.func.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropType)
  };
   
  export default BurgerIngredientCategory 
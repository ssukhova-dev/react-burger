import PropTypes from 'prop-types';

import burgerIngredientCategory from './burger-ingredient-category.module.css';

import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'



function BurgerIngredientCategory (props) {


 

      return (
              <div className={burgerIngredientCategory.burger_ingredient_category}>

                <p className={`${burgerIngredientCategory.burger_ingredient_category_caption} text text_type_main-medium p-5`}>
                    {props.caption}
                </p>

                <div className={burgerIngredientCategory.burger_ingredient_list}>
                   
                    {props.ingredients.map((ingredient, index) => (
                        <BurgerIngredientCard key={index}
                          text={ingredient.name}
                          price={ingredient.price}
                          thumbnail={ingredient.image}
                        />
                    ))}


                </div>
              </div>
      );
    
  }

  BurgerIngredientCategory.propTypes = {
    caption: PropTypes.string.isRequired,
    ingredients: PropTypes.array
  };
  
  export default BurgerIngredientCategory 
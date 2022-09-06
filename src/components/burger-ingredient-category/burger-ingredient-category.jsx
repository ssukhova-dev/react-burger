
import burgerIngredientCategory from './burger-ingredient-category.module.css';

import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'



function BurgerIngredientCategory (props) {


 

      return (
              <div className={burgerIngredientCategory.burger_ingredient_category}>

                <p className={`${burgerIngredientCategory.burger_ingredient_category_caption} text text_type_main-medium pl-5 pr-5 pb-5 pt-5`}>
                    {props.caption}
                </p>

                <div style={{ display: 'flex',  alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginLeft: '16px'  }}>
                   
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
  
  export default BurgerIngredientCategory 

import ingredientPropType from './../../utils/prop-types.jsx'

import ingredientDetailsStyle from './ingredient-details.module.css';


function IngredientDetails (props){
    return (
        <div className={ingredientDetailsStyle.content_body}>
            <img src={ props.ingredient.image_large } alt={`изображение ингредиента ${props.ingredient.name}`} />         

            <p className="text text_type_main-medium m-5" >
                {props.ingredient.name}
            </p>

            <ul className={ingredientDetailsStyle.nutritional_value_list}>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.ingredient.calories}</p>
                </li>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.ingredient.proteins}</p> 
                </li>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.ingredient.fat}</p> 
                </li>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4" >Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{props.ingredient.carbohydrates}</p> 
                </li>

            </ul>
        </div>
    );
}


IngredientDetails.propTypes = {
    ingredient: ingredientPropType
  };

export default IngredientDetails
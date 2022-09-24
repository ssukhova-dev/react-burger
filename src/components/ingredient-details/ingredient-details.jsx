
import ingredientDetailsStyle from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

function IngredientDetails (){

    const ingredient = useSelector(store => store.cart.currentIngredient);

    return (
        <div className={ingredientDetailsStyle.content_body}>
            <img src={ ingredient.image_large } alt={`изображение ингредиента ${ingredient.name}`} />         

            <p className="text text_type_main-medium m-5" >
                {ingredient.name}
            </p>

            <ul className={ingredientDetailsStyle.nutritional_value_list}>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4">Калории, ккал</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
                </li>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4">Белки, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p> 
                </li>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4">Жиры, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p> 
                </li>
                <li className={ingredientDetailsStyle.nutritional_value}>
                    <p className="text text_type_main-default text_color_inactive m-4" >Углеводы, г</p>
                    <p className="text text_type_digits-default text_color_inactive">{ingredient.carbohydrates}</p> 
                </li>

            </ul>
        </div>
    );
}



export default IngredientDetails
import React, { FC } from 'react';
import ingredientDetailsStyle from './ingredient-details.module.css';
import { useSelector, useDispatch } from '../../services/hooks';
import {useParams} from "react-router-dom"
import { ADD_CURRENT_INGREDIENT } from '../../services/actions/burger-ingredients';
import { TIngredient } from '../../utils/types';


const IngredientDetails: FC = () => {

    const dispatch = useDispatch();

    const {id}: {id: string} = useParams();
    const ingredient: TIngredient = useSelector((store) => store.currentIngredient.currentIngredient);
    const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);

    React.useEffect(() => {
        if (!ingredient && id && ingredients) {
          const ingredient = ingredients.find((ingr) => ingr._id === id);
          dispatch({
            type: ADD_CURRENT_INGREDIENT,
            ingredient: ingredient
          });
        }
      }, [ingredient, id, ingredients, dispatch]);

    return (
        ingredient ? (
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
        ):(
            <></>
        )
    );
}

export default IngredientDetails
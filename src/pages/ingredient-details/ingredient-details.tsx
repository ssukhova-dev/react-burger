
import ingredientDetailsStyle from '../../components/ingredient-details/ingredient-details.module.css';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { FC } from 'react';


const IngredientDetailsPage: FC = () => {

    return (
        <main className={ingredientDetailsStyle.pageContent}>
            <div className={ingredientDetailsStyle.title}>
                <p className="text text_type_main-large">
                    Детали ингредиента
                </p>
        
            </div>

            <IngredientDetails />
        </main>
    );
}



export default IngredientDetailsPage
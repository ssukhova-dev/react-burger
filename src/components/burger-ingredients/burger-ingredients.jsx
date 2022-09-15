import React from 'react' 

import burgerIngStyles from './burger-ingredients.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
 
import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'

import useModal from '../modal/use-modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'

import {IngredientsContext} from '../../utils/context'
import {IngredientTypes} from '../../utils/constants'

function BurgerIngredients() {
   
    const [current, setCurrent] = React.useState(IngredientTypes.bun)

    const ingredientDetailsDlg = useModal();

    const ingredients = React.useContext(IngredientsContext);

    const buns = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.bun), [ingredients]);
    const sauces = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.sauce), [ingredients]);
    const mains = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.main), [ingredients]);

    const [selectedIngredient, setIngredient] = React.useState(null)

    function showIngredientDetailsDlg(ingredient){
        setIngredient(ingredient);
        ingredientDetailsDlg.open();
    }

    function closeIngredientDetailsDlg(){
        setIngredient(null);
        ingredientDetailsDlg.requestClose();
    }

    return (
        <>
        <section className={burgerIngStyles.burger_ingredients}>

            <p className={`${burgerIngStyles.burger_ingredient_caption} text text_type_main-large p-5`} >
                Соберите бургер
            </p>

  
            <div className={burgerIngStyles.burger_ingredients_tabs} >
                <Tab value={IngredientTypes.bun} active={current === IngredientTypes.bun} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value={IngredientTypes.sauce} active={current === IngredientTypes.sauce} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value={IngredientTypes.main} active={current === IngredientTypes.main} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>



            <div className={`${burgerIngStyles.burger_category_list} ${commonStyles.custom_scrollbar}`}>
                <BurgerIngredientCategory caption="Булки" ingredients={buns} ingredientDetailsDlgOpen={showIngredientDetailsDlg}/>
                <BurgerIngredientCategory caption="Соусы" ingredients={sauces} ingredientDetailsDlgOpen={showIngredientDetailsDlg}/>
                <BurgerIngredientCategory caption="Начинка" ingredients={mains} ingredientDetailsDlgOpen={showIngredientDetailsDlg}/>
     

            </div>

        </section>

        {
            ingredientDetailsDlg.isOpen && (
                <Modal onClose={closeIngredientDetailsDlg} title="Детали ингредиента">
                    <IngredientDetails ingredient = {selectedIngredient}/>
                </Modal>
            )
        }

        </>
    );
  }


  
  export default BurgerIngredients 
import React from 'react' 

import burgerIngStyles from './burger-ingredients.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
 
import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'

import useModal from '../modal/use-modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'


import {IngredientTypes} from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CURRENT_INGREDIENT, REMOVE_CURRENT_INGREDIENT } from '../../services/actions/actions';

function BurgerIngredients() {
   
    const dispatch = useDispatch();
    const [current, setCurrent] = React.useState(IngredientTypes.bun)

    const ingredientDetailsDlg = useModal();

    const ingredients = useSelector(store => store.ingredients);

    const buns = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.bun), [ingredients]);
    const sauces = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.sauce), [ingredients]);
    const mains = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.main), [ingredients]);


    function showIngredientDetailsDlg(ingredient){
        dispatch({
            type: ADD_CURRENT_INGREDIENT,
            ingredient: ingredient
          });
        ingredientDetailsDlg.open();
    }

    function closeIngredientDetailsDlg(){
        dispatch({
            type: REMOVE_CURRENT_INGREDIENT
          });
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
                    <IngredientDetails />
                </Modal>
            )
        }

        </>
    );
  }


  
  export default BurgerIngredients 
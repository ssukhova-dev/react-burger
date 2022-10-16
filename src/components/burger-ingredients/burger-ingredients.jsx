import React from 'react' 
import PropTypes from 'prop-types';

import burgerIngStyles from './burger-ingredients.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
 
import BurgerIngredientCategory from './../burger-ingredient-category/burger-ingredient-category'

import {IngredientTypes} from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { SET_CURRENT_TAB } from '../../services/actions/burger-ingredients';

function BurgerIngredients({ingredientDetailsDlgOpen}) {
   
    const dispatch = useDispatch();
   
    const bunRef = React.useRef(null);
    const saucesRef = React.useRef(null);
    const mainsRef = React.useRef(null);
    const listRef = React.useRef(null);

    const currentTab = useSelector(store => store.tabs.currentTab);

     const refs = new Map([
        [IngredientTypes.bun,   bunRef],
        [IngredientTypes.sauce, saucesRef],
        [IngredientTypes.main,  mainsRef]
      ]);

    const setCurrentTab = (value) => {
        dispatch({
          type: SET_CURRENT_TAB,
          currentTab: value
        });

        refs.get(value).current.scrollIntoView({ behavior: 'smooth' });
      };

    const ingredients = useSelector(store => store.ingredients.ingredients);

    const buns = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.bun), [ingredients]);
    const sauces = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.sauce), [ingredients]);
    const mains = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.main), [ingredients]);


    const handleScroll = () => {

        const top = listRef.current.getBoundingClientRect().top;
        const bunTop = bunRef.current.getBoundingClientRect().top;
        const saucesTop = saucesRef.current.getBoundingClientRect().top;
        const mainsTop = mainsRef.current.getBoundingClientRect().top;

        const difBun = Math.abs(bunTop - top);
        const difSauces = Math.abs(saucesTop - top);
        const difMains = Math.abs(mainsTop - top);
   
        let currentTabValue = IngredientTypes.bun;

        if (difBun < difSauces) {
            currentTabValue = IngredientTypes.bun;
        }
        else if (difSauces < difMains) {
            currentTabValue = IngredientTypes.sauce;
        }
        else {
            currentTabValue = IngredientTypes.main;
        }

        dispatch({
            type: SET_CURRENT_TAB,
            currentTab: currentTabValue
          });
    }

    return (
        <>
        <section className={burgerIngStyles.burger_ingredients}>

            <p className={`${burgerIngStyles.burger_ingredient_caption} text text_type_main-large p-5`} >
                Соберите бургер
            </p>
  
            <div className={burgerIngStyles.burger_ingredients_tabs} >
                <Tab value={IngredientTypes.bun} active={currentTab === IngredientTypes.bun} onClick={setCurrentTab}>
                    Булки
                </Tab>
                <Tab value={IngredientTypes.sauce} active={currentTab === IngredientTypes.sauce} onClick={setCurrentTab}>
                    Соусы
                </Tab>
                <Tab value={IngredientTypes.main} active={currentTab === IngredientTypes.main} onClick={setCurrentTab}>
                    Начинки
                </Tab>
            </div>

            <div className={`${burgerIngStyles.burger_category_list} ${commonStyles.custom_scrollbar}`} onScroll={handleScroll} ref={listRef}>
                <BurgerIngredientCategory caption="Булки" ref={bunRef} ingredients={buns} ingredientDetailsDlgOpen={ingredientDetailsDlgOpen}/>
                <BurgerIngredientCategory caption="Соусы" ref={saucesRef} ingredients={sauces} ingredientDetailsDlgOpen={ingredientDetailsDlgOpen}/>
                <BurgerIngredientCategory caption="Начинка" ref={mainsRef}  ingredients={mains} ingredientDetailsDlgOpen={ingredientDetailsDlgOpen}/>
            </div>

        </section>
        </>
    );
  }

  BurgerIngredients.propTypes = {
    ingredientDetailsDlgOpen: PropTypes.func.isRequired,
  };
  
  export default BurgerIngredients 
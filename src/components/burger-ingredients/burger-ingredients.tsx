import React, { FC } from 'react' 

import burgerIngStyles from './burger-ingredients.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
 
import BurgerIngredientCategory from '../burger-ingredient-category/burger-ingredient-category'

import {IngredientTypes} from '../../utils/constants'
import { useSelector, useDispatch } from '../../services/hooks';
import { SET_CURRENT_TAB } from '../../services/actions/burger-ingredients';
import { TIngredient } from '../../utils/types';


interface IBurgerIngredientsProps{
    ingredientDetailsDlgOpen: (ingredient: TIngredient) => void;
  }
  
const BurgerIngredients: FC<IBurgerIngredientsProps> = ({ ingredientDetailsDlgOpen }) => {
  
    const dispatch = useDispatch();
   
    const bunRef = React.useRef<HTMLParagraphElement>(null);
    const saucesRef = React.useRef<HTMLParagraphElement>(null);
    const mainsRef = React.useRef<HTMLParagraphElement>(null);
    const listRef = React.useRef<HTMLDivElement>(null);

    const currentTab = useSelector((store) => store.tabs.currentTab);

     const refs = new Map([
        [IngredientTypes.bun,   bunRef],
        [IngredientTypes.sauce, saucesRef],
        [IngredientTypes.main,  mainsRef]
      ]);

    const setCurrentTab = (value: string) => {
        dispatch({
          type: SET_CURRENT_TAB,
          currentTab: value
        });

        let currentRef = refs.get(value);
        if (currentRef && currentRef.current){
            currentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        
      };

    const ingredients: Array<TIngredient> = useSelector((store) => store.ingredients.ingredients);

    const buns: TIngredient[] = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.bun), [ingredients]);
    const sauces: TIngredient[] = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.sauce), [ingredients]);
    const mains: TIngredient[] = React.useMemo(() => ingredients.filter(item => item.type === IngredientTypes.main), [ingredients]);


    const handleScroll = () => {

        const top = (listRef && listRef.current) ? listRef.current.getBoundingClientRect().top : 0;
        const bunTop = (bunRef && bunRef.current) ? bunRef.current.getBoundingClientRect().top : 0;
        const saucesTop = (saucesRef && saucesRef.current) ? saucesRef.current.getBoundingClientRect().top : 0;
        const mainsTop = (mainsRef && mainsRef.current) ? mainsRef.current.getBoundingClientRect().top : 0;

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

  export default BurgerIngredients 
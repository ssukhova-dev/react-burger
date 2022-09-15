import React from 'react' 

import burgerConstructorStyles from './burger-constructor.module.css';
import commonStyles from  './../../utils/common-styles.module.css';

import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import CartTotal from '../cart-total/cart-total'

import {v4 as uuidv4} from 'uuid'

import {IngredientsContext, SelectedIngredientsContext} from '../../utils/context'

import {IngredientTypes} from '../../utils/constants'



function BurgerConstructor() {

    const ingredients = React.useContext(IngredientsContext);
    const {selectedIngredients, setSelectedIngredients} = React.useContext(SelectedIngredientsContext);

    setSelectedIngredients(ingredients);//временное решение

    function getBunIngredient()
    {
        return selectedIngredients.find(item => item.type === IngredientTypes.bun);
    }
    const bunIngredient = React.useMemo( getBunIngredient, [selectedIngredients, getBunIngredient]);   


    function getTotalReducer()
    {
        const sum = bunIngredient ? (bunIngredient.price * 2) : 0;

        return selectedIngredients.reduce((sum, item) => ( 
            (item.type !== IngredientTypes.bun) ? (sum + item.price) : sum), sum);  
    }
    
    const [total, totalDispatcher] = React.useReducer(getTotalReducer, 0, undefined);

    React.useEffect( totalDispatcher, [selectedIngredients]  );
    

      return (
        <section className={burgerConstructorStyles.burger_constructor}>


            <div className={burgerConstructorStyles.burger_constructor_list} >
  
                {bunIngredient && (
                    <span className={burgerConstructorStyles.burger_bun} >
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bunIngredient.name} (верх)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image_mobile}       
                        />
                    </span>
                )}


        
                <div className={`${burgerConstructorStyles.burger_filling_list} ${commonStyles.custom_scrollbar}`}>

                    {selectedIngredients.map((ingredient) => (
                        (ingredient.type !== IngredientTypes.bun) && (
                            <span className={`${burgerConstructorStyles.burger_filling} m-2`} key={uuidv4()}>
                                <DragIcon type="primary"/>
                                <ConstructorElement
                                    text={ingredient.name}
                                    price={ingredient.price}
                                    thumbnail={ingredient.image_mobile}                                 
                                />
                            </span>
                        )
                    ))}

                
                </div>
 

                {bunIngredient && (
                    <span className={burgerConstructorStyles.burger_bun} >
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bunIngredient.name} (низ)`}
                            price={bunIngredient.price}
                            thumbnail={bunIngredient.image_mobile}       
                        />
                    </span>
                )}

            </div>


            <CartTotal total={total}/>


        </section>
      );
    
  }

  
  export default BurgerConstructor 
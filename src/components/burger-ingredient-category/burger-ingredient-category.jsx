import React from 'react' // импорт библиотеки

import  '../burger-ingredient-category/burger-ingredient-category.css';

import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'

class BurgerIngredientCategory extends React.Component {
    render() {
      return (
              <div className="burger-ingredient-category">
                  <div style={{ display: 'flex',  alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                    <BurgerIngredientCard/>
                    <BurgerIngredientCard/>
                    <BurgerIngredientCard/>
                    <BurgerIngredientCard/>
                </div>
              </div>
      );
    } 
  }
  
  export default BurgerIngredientCategory 
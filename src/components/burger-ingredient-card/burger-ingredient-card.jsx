import React from 'react' // импорт библиотеки

import burgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card.module.css';

class BurgerIngredientCard extends React.Component {
    render() {
      return (
              <p className={burgerIngredientCard.burgerIngredientCard}>
                  BurgerIngredientCard
              </p>
      );
    } 
  }
  
  export default BurgerIngredientCard 
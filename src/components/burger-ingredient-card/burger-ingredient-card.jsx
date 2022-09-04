import React from 'react' // импорт библиотеки

//import burgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card.module.css'; <div className={burgerIngredientCard.burgerIngredientCard}>

import  '../burger-ingredient-card/burger-ingredient-card.css';

class BurgerIngredientCard extends React.Component {
    render() {
      return (
              <div className="burger-ingredient-card">
                  BurgerIngredientCard
              </div>
      );
    } 
  }
  
  export default BurgerIngredientCard 
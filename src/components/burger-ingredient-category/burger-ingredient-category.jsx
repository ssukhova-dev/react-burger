import React from 'react' // импорт библиотеки

import  '../burger-ingredient-category/burger-ingredient-category.css';

import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'

class BurgerIngredientCategory extends React.Component {
    render() {
      return (
              <div className="burger-ingredient-category">

                <p className="burger-ingredient-category-caption text text_type_main-medium pl-5 pr-5 pb-5 pt-5" >
                    {this.props.caption}
                </p>

                <div style={{ display: 'flex',  alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginLeft: '16px'  }}>
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
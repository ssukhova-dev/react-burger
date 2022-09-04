import React from 'react' // импорт библиотеки

//import burgerIngredientCard from '../burger-ingredient-card/burger-ingredient-card.module.css'; <div className={burgerIngredientCard.burgerIngredientCard}>

import  '../burger-ingredient-card/burger-ingredient-card.css';
import '@ya.praktikum/react-developer-burger-ui-components'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'

class BurgerIngredientCard extends React.Component {
    render() {
      return (
              <div className="burger-ingredient-card">

         
                <img src={ this.props.thumbnail } alt='' />
                <span style={{ display: 'flex',  alignItems: 'flex-start'}}>
                    <p className="text text_type_main-small" style={{marginRight: '10px'}} >
                        {this.props.price}
                    </p>
                    <CurrencyIcon type="primary" />
                </span>
                <p className="text text_type_main-small" >
                    {this.props.text}
                </p>
                  
              </div>


      );
    } 
  }
  
  export default BurgerIngredientCard 
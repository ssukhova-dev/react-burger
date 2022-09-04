import React from 'react' // импорт библиотеки

import  '../burger-ingredient-category/burger-ingredient-category.css';

import BurgerIngredientCard from './../burger-ingredient-card/burger-ingredient-card'


import ImgBun02Big from './../../images/bun-02-big.svg'
//import ImgBun01Big from './../../images/bun-01-big.svg'
import ImgSauce03Big from './../../images/sauce-03-big.svg'


class BurgerIngredientCategory extends React.Component {
    render() {
      return (
              <div className="burger-ingredient-category">

                <p className="burger-ingredient-category-caption text text_type_main-medium pl-5 pr-5 pb-5 pt-5" >
                    {this.props.caption}
                </p>

                <div style={{ display: 'flex',  alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginLeft: '16px'  }}>
                    <BurgerIngredientCard
                        text="Краторная булка N-200i"
                        price={200}
                        thumbnail={ImgBun02Big}
                    />

                    <BurgerIngredientCard
                        text="Соус традиционный галактический"
                        price={30}
                        thumbnail={ImgSauce03Big}
                    />


                </div>
              </div>
      );
    } 
  }
  
  export default BurgerIngredientCategory 
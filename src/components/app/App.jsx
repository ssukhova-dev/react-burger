import React from 'react';
import './App.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'

import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

//import '@ya.praktikum/react-developer-burger-ui-components' <div className="App ml-5 mr-5 mb-5 mt-5">

function App() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className="App">
   
      <AppHeader/>
      <BurgerIngredients/>
      <BurgerConstructor/>

      <div style={{ display: 'flex' }}>
          <Tab value="one" active={current === 'one'} onClick={setCurrent}>
            One
          </Tab>
          <Tab value="two" active={current === 'two'} onClick={setCurrent}>
            Two
          </Tab>
          <Tab value="three" active={current === 'three'} onClick={setCurrent}>
            Three
          </Tab>
        </div>

   
    </div>
  );
}

export default App;

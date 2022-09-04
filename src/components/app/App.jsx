import React from 'react';
import './App.css';

import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'


//import '@ya.praktikum/react-developer-burger-ui-components' <div className="App ml-5 mr-5 mb-5 mt-5">

function App() {

  return (
    <div className="App">
   
      <AppHeader/>
      <div class="app-body">
        <BurgerIngredients/>
        <BurgerConstructor/>
      </div>

   
    </div>
  );
}

export default App;

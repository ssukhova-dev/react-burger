import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

//import '@ya.praktikum/react-developer-burger-ui-components'

function App() {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className="App ml-5 mr-5 mb-5 mt-5">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

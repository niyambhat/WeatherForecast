import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.scss';
import Home from './Pages/Home';
import { MainAppContext } from './AppContext';

function App() {
  return (
    <MainAppContext>
        <div className="app">
        <Home/>
      </div>
    </MainAppContext>
  );
}

export default App;

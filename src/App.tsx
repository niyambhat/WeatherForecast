
import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Weather from './Pages/Weather';


function App() {
  return (
  <div className="app">
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/weather" />} />
        <Route path="/weather" element={<Weather />}>
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;

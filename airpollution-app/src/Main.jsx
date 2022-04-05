import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Recomendations from './pages/Recomendations'

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/recomendations' element={Recomendations}></Route>
    </Routes>
  );
}

export default Main;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import SingleItemPage from '../pages/SingleItemPage';
import NotFound from '../pages/NotFound';

function AppRouter() {
  
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/starship/:id" element={<SingleItemPage />} />
     <Route path="/*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
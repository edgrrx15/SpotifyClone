import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/Home';
import Search from '../screens/SearchScreen'
import AlbumDetail from '../screens/AlbumDetail';
import NotFound from '../screens/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/album/:id' element={<AlbumDetail />} />
      <Route path='/search' element={<Search />} />
      <Route path='/not-found' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes

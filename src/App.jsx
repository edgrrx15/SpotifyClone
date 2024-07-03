import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './navigation/AppRoutes'
import Player from './components/Player';
import AlbumDetail from './screens/AlbumDetail';
const App = () => {

  return (
    <Router>
      <div className='h-screen bg-black text-white '>
        <div className='h-[90%] flex'>
          <Sidebar/>
          <AppRoutes />
        </div>
        <Player/>
      </div>
    </Router>
  );
};

export default App;

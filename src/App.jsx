import React from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='div-home'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

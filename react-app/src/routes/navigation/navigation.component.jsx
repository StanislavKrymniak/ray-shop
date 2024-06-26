import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav className='navigator_container'>
        <Link to='/shop'>Каталог</Link>
        <Link to='/'>420</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;

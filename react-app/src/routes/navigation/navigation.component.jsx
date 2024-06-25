




import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to='/shop'>Каталог</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;

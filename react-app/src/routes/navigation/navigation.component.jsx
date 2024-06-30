import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss'


export const Navigation = () => {
  return (
      <div className='navigation_container'>
        <div className="navigation_body">
          <div className="navigation_links">
            <div className="navigation_link"></div>
            <Link to='/shop'>Каталог</Link>
            <Link to='/'>420</Link>
          </div>
        </div>
        <Outlet />
      </div>
  );
};

export default Navigation;

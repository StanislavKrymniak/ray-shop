import React from 'react';
import { Link, Outlet,useLocation } from 'react-router-dom';
import './navigation.styles.scss'


export const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
      <div className="navigation_container">
        <div className={`navigation_body ${isHomePage ? 'home' : 'not-home'}`}>
          <div className="navigation_links">
            <div className="navigation_shop"><Link to='/shop'>Каталог</Link></div>
            <div className="navigation_label"><Link to='/'>420</Link></div>
          </div>
        </div>
        <Outlet />
      </div>
  );
};

export default Navigation;

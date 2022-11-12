import React from 'react';
import classes from '../Header/Header.module.css';
import NavItems from './NavItems/NavItems';

const Nav = ({ ulClass }) => {
   return (
      <nav className={classes['nav-bar']}>
         <NavItems ulClass={ulClass} />
      </nav>
   );
};

export default Nav;

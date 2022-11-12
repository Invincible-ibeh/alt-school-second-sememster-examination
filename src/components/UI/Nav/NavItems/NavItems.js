import React, { useContext } from 'react';
import classes from '../../Header/Header.module.css';
import NavItem from './NavItem/NavItem';
import Context from '../../../Context/Context';
import DrawerToggle from '../DrawerToggle/DrawerToggle';

const NavItems = (props) => {
   const context = useContext(Context);
   const repoCount = context.userRepos.data ? (
      <p>
         My Repos
      </p>
   ) : (
      ''
   );

   return (
      <>
         <ul className={classes[props.ulClass]}>
            <NavItem URL="/">
               <p>Overview</p>
            </NavItem>
            <NavItem URL="/repos">{repoCount}</NavItem>
            <NavItem URL="/error">
               <p>Test Error</p>
            </NavItem>
         </ul>
         <DrawerToggle />
         <div className={classes['nav-bar__list--after']}></div>
      </>
   );
};

export default NavItems;

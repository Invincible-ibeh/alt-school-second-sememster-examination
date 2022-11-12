import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../../../../Context/Context';
import classes from '../../../Header/Header.module.css';

const NavItem = ( props ) => {
   const context = useContext(Context);
   return (
      <li onMouseOver={props.hover}>
         <NavLink to={props.URL}>
            <span className={classes['nav-bar__link']} onClick={context.removeMenuModal}>{props.children}</span>
         </NavLink>
      </li>
   );
};

export default NavItem;
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Nav from '../Nav/Nav';
import MenuModal from '../../Modals/MenuModal/MenuModal';

const Header = () => {
   return (
      <header className={classes.header}>
         <Link to="/">
            Ibeh Miracle
         </Link>

         <Nav />
         <MenuModal>
            <Nav ulClass="flex" />
         </MenuModal>
      </header>
   );
};

export default Header;

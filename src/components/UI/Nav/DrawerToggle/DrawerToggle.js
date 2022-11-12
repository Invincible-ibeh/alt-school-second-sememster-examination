import React, { useContext } from 'react';
import Context from '../../../Context/Context';

import './DrawerToggle.css';

const DrawerToggle = ( props ) => {
   const context = useContext(Context);
   return (
      <div className={`DrawerToggle ${context.menuModal}`} onClick={context.showMenuModal}>
         <div className="line1"></div>
         <div className="line2"></div>
         <div className="line3"></div>
      </div>
   );
};

export default DrawerToggle;

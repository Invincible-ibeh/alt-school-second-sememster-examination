import React, { useContext } from 'react';
import Context from '../../Context/Context';
import classes from './Overview.module.css';
import About from './About/About';

const Overview = (prop) => {
   const context = useContext(Context);
   const userData = context.userData;
   const holder = (
      <div className={classes.holder}>
         <button
            className={classes['myButton']}
            onClick={() => {
               window.location.reload();
            }}
         >
           Loading Data, Click to refresh after a while
         </button>
      </div>
   );

   return (
      <section className={classes.main}>
         {userData ? <About /> : holder}
      </section>
   );
};

export default Overview;

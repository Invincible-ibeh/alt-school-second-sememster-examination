import React from 'react';
import classes from './spinner.module.css';

const Spinner = () => {
   return (
      <>
         <div className={classes.loader}>Loading...</div>
         {(() => {
            setTimeout(() => {
               return <p>Grab cup of coffee...</p>;
            }, 10000);
         })()}
      </>
   );
};

export default Spinner;

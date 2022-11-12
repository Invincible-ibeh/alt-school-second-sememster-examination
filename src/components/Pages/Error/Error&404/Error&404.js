import React, { useContext } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import Context from '../../../Context/Context';
import classes from './Error&404.module.css'


const Error404 = () => {
   const context = useContext( Context );
   const handleError = useErrorHandler();
   const throwCounterClickHandler = () => {
      try {
         if (context.count <= 1) {
            throw new Error('error error');
         }
         context.setCount(context.count - 1);
      } catch (error) {
         context.setCountError( error );
         handleError( error );
      }
   };

   return (
      <div className={ classes[ "main" ] }>
         <p className={classes["text"]}>click the button below for error and 404</p>
         <div className ={classes['btnBox']}>
            <button className={classes['myButton']} onClick={throwCounterClickHandler}>
               click error {context.count} 
            </button>
            <Link to='/notFound' className={classes['myButton']}>
               404 Page
            </Link>
         </div>
      </div>
   );
};

export default Error404;

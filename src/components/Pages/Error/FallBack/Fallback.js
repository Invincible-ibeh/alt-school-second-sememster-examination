import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classes from './FallBack.module.css';

const Fallback = (error, text) => {
   const navigate = useNavigate();
   return (
      <>
         <div role="alert" className={classes['main']}>
            <p className={classes['text']}>{text}</p>
            <p className={classes['errorMsg']}>{error.message}</p>
            <a
               href="/"
               className={classes['myButton']}
               onClick={() => navigate(-1)}
            >
               Home
            </a>
         </div>
      </>
   );
};
export const Fallbacks = (props) => {
   const navigate = useNavigate();
   return (
      <>
         <div role="alert" className={classes['main']}>
            <p className={classes['text']}>
               {props.text}
            </p>
            <p className={classes['errorMsg']}>{props.error}</p>
            <Link to='/' className={classes['myButton'] } onClick={() => navigate(-1)}> {props.send}</Link>
         </div>
      </>
   );
};

export default Fallback;

import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Context from '../../Context/Context';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
   const context = useContext(Context);
   const holder = context.menuModal
      ? ReactDOM.createPortal(
           <button
              className={classes['backdrop']}
              onClick={props.click}
           ></button>,
           document.getElementById('backdrop-root'),
        )
      : null;
   return holder;
};

export default Backdrop;

import React, { useContext, useEffect } from 'react';
import instance from '../../../../../Packages/Axios/Axios';
import Context from '../../../../../Context/Context';
import markdown from '@wcj/markdown-to-html';

const decode = (str) => {
   return decodeURIComponent(escape(window.atob(str)));
};

const Readme = (props) => {
   const context = useContext( Context );
   
   useEffect( () => {
      const body = document.getElementById('readme');
      instance
         .get(`/${props.name}/contents/README.md`)
         .then((res) => {
            body.innerHTML = markdown( decode( res.data.content ));
         })
         .catch((error) => {
            // setErrorMsg(error.message);
            console.log(error.message);
         } );
   }, [props.name, context]);

   const readme =
      context.readme === '' ? (
         <p>Readme not found</p>
      ) : null;
   return readme;
};

export default Readme;

import React from 'react';
import Image from '../../Image/Image';
import classes from './MediaIcon.module.css'

const MediaIcon = (props) => {
   return (
      <a
         href={props.href}
         target="_blank"
         rel="noreferrer"
         className={classes['social-media__link']}
      >
         <Image src={props.src} alt={props.alt} radius="50%" />
      </a>
   );
};

export default MediaIcon;
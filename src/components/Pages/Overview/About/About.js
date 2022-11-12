import React, { useContext } from 'react';
import Context from '../../../Context/Context';
import Image from '../../../UI/Image/Image';
import MediaIcons from '../../../UI/MediaIcons/MediaIcons';
import classes from './About.module.css';

const About = () => {
   const context = useContext( Context );
   const userName = 'Ibeh Miracle'
   const avatar = context.userData['data']['avatar_url'];
   const bio = context.userData['data']['bio'];

   return (
      <div className={classes['about-section--main']}>
         <div className="about-section__container desktop">
            <h2 className={classes['about-section__title']}>About me</h2>
            <div className={classes['about-section__text']}>
               <span className={classes['about-section__text-text']}>
                  <span className={classes['about-section__text-text--main']}>
                     Hello , I'm
                  </span>
                  <br />
                  <span className={classes['about-section__text-text--sub']}>
                     {userName}
                  </span>
                  <p className={classes['about-section__text__paragraph']}>
                     WEB DEVELOPER IN Training @ AltSchool Africa.
                  </p>
               </span>
            </div>
            <h2 className={classes['about-section__title']}>Bio</h2>
            <p
               className={`${classes['about-section__text']} ${classes['bio']}`}
            >
               {bio}
            </p>
         </div>

         <div>
            <Image src={ avatar } radius="50%" maxWidth="600px" alt="avatar" />
            <MediaIcons />
         </div>
      </div>
   );
};

export default About;

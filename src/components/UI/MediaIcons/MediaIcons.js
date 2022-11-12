import React, { useContext } from 'react';
import Context from '../../Context/Context';
import MediaIcon from './MediaIcon/MediaIcon';
import classes from './MediaIcons.module.css';
import githubImage from '../../../assets/icons/github.svg';
import twitterImage from '../../../assets/icons/twitter.svg';

const MediaIcons = () => {
   const context = useContext(Context);
   const github = context.userData['data']['html_url'];
   const twitter = context.userData[ 'data' ][ 'twitter_username' ];

   return (
      <div className={classes['social-media']}>
         <MediaIcon href={github} src={githubImage} alt="github icon" maxWidth="" />
         <MediaIcon
            href={`https://twitter.com/${twitter}`}
            src={twitterImage}
            alt="twitter icon"
         />
      </div>
   );
};

export default MediaIcons;

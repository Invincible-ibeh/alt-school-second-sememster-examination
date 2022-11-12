import React from 'react';
import Image from '../../UI/Image/Image';
import RepoTile from '../Repositories/RepoTile/RepoTile';
import ViewRepoBtn from '../Repositories/RepoTile/ViewRepoBtn/ViewRepoBtn';
import classes from './Repo.module.css';
import githubImage from '../../../assets/icons/github.svg';

const Repo = ( props ) => {
   return (
      <div className={ classes[ 'repositories' ] }>
         <RepoTile name={props.name} about={props.about}>
            <ViewRepoBtn
               sty="project-tile__link"
               image={
                  <Image
                     src={githubImage}
                     radius="50%"
                     maxWidth="30px"
                     alt="github icon"
                  />
               }
               text="Github"
               page={props.url}
            />
            <ViewRepoBtn
               sty="flip-card__action"
               text="View Link"
               page={props.page}
            />
         </RepoTile>
      </div>
   );
};

export default Repo;

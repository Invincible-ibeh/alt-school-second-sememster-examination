import React from 'react';
import classes from './Repos.module.css';
import RepoLinkBtn from './RepoTile/RepoLinkBtn/RepoLinkBtn';
import RepoTile from './RepoTile/RepoTile';

const Repositories = ({ currentItems }) => {
   const repos = currentItems ? currentItems : null;

   const repoTiles = repos
      ? repos.map((repo, index) => (
           <RepoTile
              name={currentItems[index].name}
              about={currentItems[index].description}
              key={currentItems[index].id}
           >
              <RepoLinkBtn name={currentItems[index].name} act="More Info!!!" />
           </RepoTile>
        ))
      : null;

   return <div className={classes.repositories}>{repoTiles}</div>;
};

export default Repositories;

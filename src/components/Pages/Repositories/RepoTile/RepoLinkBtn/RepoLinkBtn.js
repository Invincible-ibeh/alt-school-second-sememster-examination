import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Context from '../../../../Context/Context';
import classes from '../RepoTile.module.css';

const RepoLinkBtn = (props) => {
   const context = useContext(Context);
   context.readme = <Outlet />;
   return (
      <Link to={`${props.name}`} className={classes['flip-card__action']}>
         {props.act}
      </Link>
   );
};

export default RepoLinkBtn;

import React, { useState, useEffect } from 'react';
import Context from './components/Context/Context';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Overview from './components/Pages/Overview/Overview';
import Header from './components/UI/Header/Header';
import PaginatedPages from './components/Paginate/PaginatedPages';
import Repo from './components/Pages/Repo/Repo';
import Backdrop from './components/Modals/Backdrop/Backdrop';
import { ErrorBoundary } from 'react-error-boundary';
import Error404 from './components/Pages/Error/Error&404/Error&404';
import Fallback, {
   Fallbacks,
} from './components/Pages/Error/FallBack/Fallback';

const App = () => {
   const [userData, setUserData] = useState('');
   const [userRepos, setUserRepos] = useState('');
   const [errorMsg, setErrorMsg] = useState();
   const [readme, setReadme] = useState('');
   const [menuModal, setMenuModal] = useState(false);
   const [count, setCount] = useState(2);
   const [countError, setCountError] = useState(null);

   useEffect(() => {
      axios
         .get('https://api.github.com/users/Invincible-ibeh')
         .then((res) => {
            setUserData( res );
            console.log(res);
         })
         .catch((error) => {
            setErrorMsg(error.message);
            console.log(error.message);
         });
      axios
         .get('https://api.github.com/users/Invincible-ibeh/repos?per_page=100')
         .then((res) => {
            setUserRepos(res);
         })
         .catch((error) => {
            setErrorMsg(error.message);
         } );
   }, []);

   const showMenuModal = () => {
      setMenuModal(!menuModal);
      if (!menuModal) {
         document.body.classList.add('StopScroll');
      } else {
         document.body.classList.remove('StopScroll');
      }
   };
   const removeMenuModal = () => {
      setMenuModal( false );
      document.body.classList.remove('StopScroll');
   };

   const onError = (error, errorInfo) => {
      setCountError(error);
      console.log(error, errorInfo);
   };

   const value = {
      userData,
      userRepos,
      errorMsg,
      readme,
      setReadme,
      menuModal,
      showMenuModal,
      removeMenuModal,
      count,
      setCount,
      countError,
      setCountError,
   };

   const routeData = userRepos ? userRepos.data : [];
   const routeDataMap = routeData.map((item) => (
      <Route
         path={`repos/${item.name}`}
         key={item.id}
         element={
            <Repo
               name={item.name}
               about={item.description}
               page={item.homepage}
               url={item.html_url}
            />
         }
      />
   ));

   const text = 'something went wrong';
   const text404 = 'PAGE NOT FOUND!!';
   const error404 = `URL doesn't exist on this site.`;

   return (
      <ErrorBoundary
         FallbackComponent={() => Fallback(countError, text)}
         onError={onError}
      >
         <Context.Provider value={value}>
            <Header />
            <Backdrop click={() => setMenuModal(false)} />
            <main>
               <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route
                     path="repos"
                     element={<PaginatedPages itemsPerPage={5} />}
                  />
                  {routeDataMap}
                  <Route path="/error" element={<Error404 />} />
                  <Route
                     path="*"
                     element={
                        <Fallbacks error={error404} text={text404} send="Back" />
                     }
                  />
               </Routes>
            </main>
         </Context.Provider>
      </ErrorBoundary>
   );
};

export default App;

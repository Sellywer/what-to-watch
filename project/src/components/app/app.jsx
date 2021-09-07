import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { AppRoute } from '../../const';
import Main from '../main/main';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import PageNotFound from '../page-not-found/page-not-found';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import SignIn from '../sign-in/sign-in';

const movieCount = 20;
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main movieCount={movieCount} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn  />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList  />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <MoviePage />
        </Route>
        <Route exact path={AppRoute.ADDREVIEW}>
          <AddReview/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player/>
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

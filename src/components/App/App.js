import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";


function App() {
  return (
    <div className="app__root">
      <div className="app__page">
        <Header/>
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route path="/saved-movies">
            <SavedMovies/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="*">
            <PageNotFound/>
          </Route>
        </Switch>
        <Footer/>

        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
      </div>
    </div>
  );
}

export default App;

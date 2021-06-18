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
import Menu from "../Menu/Menu";
import Navigation from "../Navigation/Navigation";

function App() {

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleMenuButtonClick() {
    setMenuOpen(true);
  }

  function handleCloseButtonClick() {
    setMenuOpen(false);
  }

  return (
    <div className="app__root">
      <div className="app__page">
        <Switch>
          <Route exact path="/">
            <Header/>
            <Main/>
            <Footer/>
          </Route>
          <Route exact path="/movies">
            <Navigation
              onMenuOpen={handleMenuButtonClick}/>
            <Movies/>
            <Footer/>
          </Route>
          <Route exact path="/saved-movies">
            <Navigation
              onMenuOpen={handleMenuButtonClick}/>
            <SavedMovies/>
            <Footer/>
          </Route>
          <Route exact path="/profile">
            <Navigation
              onMenuOpen={handleMenuButtonClick}/>
            <Profile/>
          </Route>
          <Route path="/404">
            <PageNotFound/>
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/signup">
            <Register/>
          </Route>
          <Route exact path="/signin">
            <Login/>
          </Route>
        </Switch>
        <Menu
          isOpen={isMenuOpen}
          onClose={handleCloseButtonClick}
        />
      </div>
    </div>
  );
}

export default App;

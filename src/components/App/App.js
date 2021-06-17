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
import ProtectedRoute from "../ProtectedRoute";
import Menu from "../Menu/Menu";

function App() {

  // const [loggedIn, setLoggedIn] = React.useState(false);
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
        <Header
        onMenuOpen={handleMenuButtonClick}/>
        <Switch>
          <Route exact path="/">
            {/*// loggedIn={loggedIn}*/}
            <Main/>
          </Route>
          <Route exact path="/movies">
            {/*// loggedIn={loggedIn}*/}
            {/*// component={Movies}*/}
            <Movies/>
          </Route>
          <Route exact path="/saved-movies">
            {/*// loggedIn={loggedIn}*/}
            <SavedMovies/>
            {/*component={SavedMovies}*/}
          </Route>
          <Route exact path="/profile">
            {/*// loggedIn={loggedIn}*/}
            <Profile/>
            {/*component={Profile}*/}
          </Route>
          <Route path="/404">
            <PageNotFound/>
          </Route>
        </Switch>
        <Footer/>
        <Switch>
          <Route exact path="/signup">
            <Register/>
          </Route>
          <Route exact path="/signin">
            <Login/>
          </Route>
        </Switch>
        {/*{loggedIn && <Footer/>}*/}
        <Menu/>
          {/*// isOpen={isMenuOpen}*/}
          {/*//     onClose={closePopup}/>*/}
      </div>
    </div>
  );
}

export default App;

import React from "react";
import {Route, Switch, useLocation, useHistory} from 'react-router-dom';
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
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute";
import * as Auth from "../../utils/Auth";
import newMainApi from "../../utils/MainApi";

function App() {

  const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});

  //константы для регистрации, авторизации
  const [data, setData] = React.useState({
    email: '',
    password: ''
  });

  const [loggedIn, setLoggedIn] = React.useState(false);
  //переход по ссылкам в шапке профиля регистрация-войти
  const {pathname} = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/');
    }
  }, [history, loggedIn])

  React.useEffect(() => {
    tokenCheck();
  }, [history, loggedIn])

  //методы для регистрации, авторизации
  function handleRegistration({name, email, password}) {
    Auth.registration({name, email, password})
      .then(() => {

        // setRegisterStatus(true)
        // setInfoToolTipOpen(true);
        history.push('/signin')
      })
      .catch((err) => {
        console.log('error', err)
        // setRegisterStatus(false)
        // setInfoToolTipOpen(true);
      })
  }

  function handleAuthorization({email, password}) {
    Auth.authorization({email, password})
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        newMainApi.setToken();
        setLoggedIn(true);
        history.push('/');
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      Auth.getContent(jwt)
        .then(({email}) => {
          if (email) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log('error', err)
        })
    }
  }

  function handleLogOut() {
    localStorage.removeItem('jwt');
    setData({
      email: '',
      password: ''
    });
    setLoggedIn(false);
    history.push('/signin');
  }

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  // const [isMovieSaved, setMovieSaved] = React.useState(false);

  function handleMenuButtonClick() {
    setMenuOpen(true);
  }

  function handleCloseButtonClick() {
    setMenuOpen(false);
  }

  // function handleSaveMovieButtonClick() {
  //   setMovieSaved(true);
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app__root">
        <div className="app__page">

            <Header
              currentPath={pathname}
              // onLogOut={handleLogOut}
              email={currentUser.email}/>
          <Switch>
              <Route exact path="/">
                <Main/>
              </Route>
            <ProtectedRoute path="/movies"
                            loggedIn={loggedIn}
                            onMenuOpen={handleMenuButtonClick}
                            component={Movies}
                            /*// onMovieSave={handleSaveMovieButtonClick}/>*/
            />
            <ProtectedRoute path="/saved-movies"
                            loggedIn={loggedIn}
                            onMenuOpen={handleMenuButtonClick}
                            component={SavedMovies}
            />
            <ProtectedRoute path="/profile"
                            loggedIn={loggedIn}
                            onMenuOpen={handleMenuButtonClick}
                            component={Profile}
            />
            <Route path="/404">
              <PageNotFound/>
            </Route>
          </Switch>
          <Switch>
            <Route path="/signup">
              <Register onRegister={handleRegistration}/>
            </Route>
            <Route path="/signin">
              <Login
                data={data}
                onEnter={setData}
                onAutorization={handleAuthorization}/>
            </Route>
          </Switch>
          <Menu
            isOpen={isMenuOpen}
            onClose={handleCloseButtonClick}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

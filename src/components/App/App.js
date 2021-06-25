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
import Popup from "../Popup/Popup";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const {pathname} = useLocation();
  const history = useHistory();

  const MainRoute = '/';
  const isRegisterRoute = '/signup' == pathname;
  const isLoginRoute = '/signin' == pathname;
  const ProfileRoute = '/profile';
  const MovieRoute = '/movies';
  const SaveMovieRoute = '/saved-movies';

  console.log(pathname)

  const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});
  const [editProfileStatus, setEditProfileStatus] = React.useState(false);

  //константы для регистрации, авторизации
  const [data, setData] = React.useState({
    email: '',
    password: ''
  });


  //открытие-закрытие попапов
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = React.useState(false);


  // const [isMovieSaved, setMovieSaved] = React.useState(false);


//методы для регистрации, авторизации
  React.useEffect(() => {
    if (loggedIn) {
      console.log(1, loggedIn)
      history.push('/movies');
    }
  }, [history, loggedIn])

  React.useEffect(() => {
    tokenCheck();
  }, [history, loggedIn])

  function handleRegistration({name, email, password}) {
    Auth.registration({name, email, password})
      .then(() => {
        history.push('/signin')
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function handleAuthorization({email, password}) {
    Auth.authorization({email, password})
      .then((data) => {
        console.log(data.token, email, password)
        localStorage.setItem('jwt', data.token);
        newMainApi.setToken();
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  const tokenCheck = () => {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      Auth.getContent(jwt)
        .then(({email, name}) => {
          if (email) {
            setLoggedIn(true);
            setCurrentUser({email, name})
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
    history.push('/');
  }

  //редактирование профиля
  function handleUpdateUser(user) {
    newMainApi.editProfileInfo(user.name, user.email)
      .then((data) => {
        setCurrentUser(data);
        // setPopupOpen(true);
        setEditProfileStatus(true);
      })
      .catch((err) => {
        setEditProfileStatus(false);
        console.log('error', err)
      })
  }

  //бургерное меню
  function handleMenuButtonClick() {
    setMenuOpen(true);
  }

  function handleMenuCloseButtonClick() {
    setMenuOpen(false);
  }

  //попап подтверждения изменения профиля
  function handlePopupOpen() {
    setPopupOpen(true);
  }

  function handlePopupCloseButtonClick() {
    setPopupOpen(false);
  }

  // function handleSaveMovieButtonClick() {
  //   setMovieSaved(true);
  // }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app__root">
        <div className="app__page">
          {!isRegisterRoute && !isLoginRoute &&
          <Header
            currentPath={pathname}
            loggedIn={loggedIn}
            // email={currentUser.email}
          />
          }

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
                            onPopupOpen={handlePopupOpen}
                            onUpdateUser={handleUpdateUser}
                            onLogOut={handleLogOut}
                            component={Profile}
            />
            <Route path="/404">
              <PageNotFound/>
            </Route>
          </Switch>
          {!isRegisterRoute && !isLoginRoute && <Footer/>}
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
            onClose={handleMenuCloseButtonClick}
          />
          <Popup
            isOpen={isPopupOpen}
            onPopupClose={handlePopupCloseButtonClick}
            isEditProfileSuccessful={editProfileStatus}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

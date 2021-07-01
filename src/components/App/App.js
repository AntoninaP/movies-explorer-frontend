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
import newMoviesApi from "../../utils/MoviesApi";
import Popup from "../Popup/Popup";
import useFormWithValidation from "../FormValidator/FormValidator";

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

  const [currentUser, setCurrentUser] = React.useState({_id: '', name: '', email: ''});
  const [editProfileStatus, setEditProfileStatus] = React.useState(false);

  //константы для регистрации, авторизации
  const [data, setData] = React.useState({
    email: '',
    password: ''
  });

  //открытие-закрытие попапов
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = React.useState(false);

//фильмы
  const [movies, setMovies] = React.useState([]);
  const [searchedMovies, setSearchedMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

//методы для регистрации, авторизации
  React.useEffect(() => {
    if (loggedIn) {
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
        .then(({_id, email, name}) => {
          if (email) {
            setLoggedIn(true);
            setCurrentUser({_id, email, name})
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

  React.useEffect(() => {
    newMoviesApi.getInitialMovies()
      .then((data) => {
        setMovies(data)
      })
      .catch((err) => {
        console.log('error', err)
      })
    getSaveMovies();
  }, [history, loggedIn])


  function handleMovieSearch(value) {
    let a = [];
    // const words = value
    movies.forEach(movie => {
      // words.forEach(word => {
      if (movie.nameRU != null && movie.nameRU.indexOf(value) !== -1 ||
        movie.nameEN != null && movie.nameEN.indexOf(value) !== -1) {
        const foundMovie = JSON.parse(JSON.stringify(movie))
        foundMovie.thumbnail = 'https://api.nomoreparties.co'+ movie.image.formats.thumbnail.url;
        foundMovie.image = 'https://api.nomoreparties.co'+ movie.image.url;
        if (isLiked(movie.id)) {
          foundMovie.owner = currentUser._id;
        }
        a.push(foundMovie);
      }
      // })
    })
    setSearchedMovies(a);
  }

  //проверяем наличие лайка по id
  function isLiked(movieId) {
    for (const movie of savedMovies) {
      if (movie.movieId === movieId) {
        return true
      }
    }
    return false
  }

  function handleMovieLike(movie) {
    // Отправляем запрос в API и сохраняем фильм в базу пользователя
    newMainApi.addNewMovie(movie)
      .then((m) => {
        movie.owner = m.owner;
        setSavedMovies([...savedMovies, m]);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function getSaveMovies() {
    newMainApi.getMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => {
        console.log('error', err)
      })
  }

  function handleMovieDislike(movieId) {
    console.log(movieId)
    newMainApi.deleteMovie(movieId)
      .then(() => {
        getSaveMovies()
      })
      .catch((err) => {
        console.log('error', err)
      })
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app__root">
        <div className="app__page">
          {!isRegisterRoute && !isLoginRoute &&
          <Header
            currentPath={pathname}
            loggedIn={loggedIn}
          />
          }
          <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <ProtectedRoute path="/movies"
                            loggedIn={loggedIn}
                            onMenuOpen={handleMenuButtonClick}
                            onSearch={handleMovieSearch}
                            component={Movies}
                            movies={searchedMovies}
                            saveMovie={handleMovieLike}
                            deleteMovie={handleMovieDislike}
            />
            <ProtectedRoute path="/saved-movies"
                            loggedIn={loggedIn}
                            onMenuOpen={handleMenuButtonClick}
                            component={SavedMovies}
                            movies={savedMovies}
                            deleteMovie={handleMovieDislike}
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
              <Register onRegister={handleRegistration}
                        isValidate={useFormWithValidation}/>
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

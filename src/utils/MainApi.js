class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  // запрос данных пользователя с сервера
  getProfileInfo() {
    return fetch(this.baseUrl + '/users/me', {
      headers: this.headers
    })
      .then(this._checkResponse)
  }

  // редактирование данных пользователя
  editProfileInfo(name, email) {
    return fetch(this.baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(this._checkResponse)
  }

  setToken() {
    this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
  }

  // добавление нового фильма
  // addNewMovie(country, director, duration, year, description, image, trailer, thumbnail,
  //             nameRU, nameEN, movieId) {
  //   return fetch(this.baseUrl + '/movies', {
  //     method: 'POST',
  //     headers: this.headers,
  //     body: JSON.stringify({
  //       country: country,
  //       director: director,
  //       duration: duration,
  //       year: year,
  //       description: description,
  //       image: image,
  //       trailer: trailer,
  //       thumbnail: thumbnail,
  //       nameRU: nameRU,
  //       nameEN: nameEN,
  //       movieId: movieId,
  //     })
  //   })
  //     .then(this._checkResponse)
  // }

}

const newMainApi = new MainApi({

  baseUrl: 'http://localhost:3001',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
})

export default newMainApi

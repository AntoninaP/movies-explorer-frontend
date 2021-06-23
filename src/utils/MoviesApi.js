

class MoviesApi {
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

  // загрузка массива фильмов с сервера
  getInitialMovies() {
    return fetch(this.baseUrl + 'movies', {
      headers: this.headers
    })
      .then(this._checkResponse)
  }
//
// // добавление новой карточки
//   addNewCard(name, link) {
//     return fetch(this.baseUrl + 'cards', {
//       method: 'POST',
//       headers: this.headers,
//       body: JSON.stringify({
//         name: name,
//         link: link
//       })
//     })
//       .then(this._checkResponse)
//   }
//
//   // удаление карточки
//   deleteCard(cardId) {
//     return fetch(this.baseUrl + `cards/${cardId}`, {
//       method: 'DELETE',
//       headers: this.headers,
//     })
//       .then(this._checkResponse)
//   }
//
//   changeLikeCardStatus(cardId, isLiked) {
//     if (isLiked) {
//       return this._putLike(cardId)
//     } else {
//       return this._deleteLike(cardId)
//     }
//   }
//
//   //поставить лайк
//   _putLike(cardId) {
//     return fetch(this.baseUrl + `cards/${cardId}/likes`, {
//       method: 'PUT',
//       headers: this.headers,
//     })
//       .then(this._checkResponse)
//   }
//
//   //удалить лайк
//   _deleteLike(cardId) {
//     return fetch(this.baseUrl + `cards/${cardId}/likes`, {
//       method: 'DELETE',
//       headers: this.headers,
//     })
//       .then(this._checkResponse)
//   }
//
//   setToken() {
//     this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
//   }

}

const newMoviesApi = new MoviesApi({

  baseUrl: '/https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json'
  }
})

export default newMoviesApi

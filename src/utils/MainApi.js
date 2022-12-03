import { localizeDate } from './utils';

class MainApi {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._headers = options.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkServerResponse);
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject({ status: res.status, statusText: res.statusText });
  }

  register(email, password, name) {
    return this._request(`${this._baseURL}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    });
  }

  authorize(email, password) {
    return this._request(`${this._baseURL}/signin`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }).then((data) => {
      localStorage.setItem('jwt', data.token);
      localStorage.setItem('email', data.email);
      localStorage.setItem('username', data.name);
      return data;
    });
  }

  checkToken(token) {
    return this._request(`${this._baseURL}/users/me`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getSavedArticles() {
    return this._request(`${this._baseURL}/articles`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }

  saveArticle(data) {
    return this._request(`${this._baseURL}/articles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify(data),
    });
  }

  deleteArticle(articleId) {
    return this._request(`${this._baseURL}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    });
  }
}

const mainApi = new MainApi({
  baseURL: 'https://api.rudinews.students.nomoredomainssbs.ru',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;

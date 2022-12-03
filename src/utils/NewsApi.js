class NewsApi {
  constructor(options) {
    this._baseURL = options.baseURL;
    this._apiKey = options.apiKey;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status} - ${res.statusText}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkServerResponse);
  }

  _formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  searchNews(keyword) {
    return this._request(
      `${this._baseURL}/everything?q=${keyword}&from=${this._formatDate(
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      )}&to=${this._formatDate(new Date())}&pageSize=100&apiKey=${
        this._apiKey
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}

const newsApi = new NewsApi({
  baseURL: 'https://nomoreparties.co/news/v2',
  apiKey: 'dee734d9de804e36bac71d6f4824bc9c',
});

export default newsApi;

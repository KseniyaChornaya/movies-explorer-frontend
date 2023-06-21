// class MainApi {
//     constructor(options) {
//       this._url = options.url;
//       this._headers = options.headers;
//     }

//     async _getResponseData(res) {
//       if (!res.ok) {
//         const err = await res.json();
//         if (res.status === 401) {
//           err.status = 401;
//         }
//         return Promise.reject(err);
//       }
//       return res.json();
//     }

//     async getSavedMovies() {
//       this._token = JSON.parse(localStorage.getItem('token'));
//       const res = await fetch(`${this._url}/movies`, {
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${this._token}`,
//         },
//       });
//       return this._getResponseData(res);
//     }

//     async savedMovie(data) {
//       this._token = JSON.parse(localStorage.getItem('token'));
//       const res = await fetch(`${this._url}/movies`, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${this._token}`,
//         },
//         body: JSON.stringify(data),
//       });
//       return this._getResponseData(res);
//     }

//     async deleteMovie(id) {
//       this._token = JSON.parse(localStorage.getItem('token'));
//       const res = await fetch(`${this._url}/movies/${id}`, {
//         method: 'DELETE',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${this._token}`,
//         },
//       });
//       return this._getResponseData(res);
//     }
//   }

//   export const savedMoviesApi = new MainApi({
//     url: ,
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//   });

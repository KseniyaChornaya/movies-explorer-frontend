// import { settingsMoviesApi } from './config';

// class MoviesApi {
//   constructor(options) {
//     this._url = options.url;
//   }

//   async _getResponseData(res) {
//     if (!res.ok) {
//       const err = await res.json();
//       return Promise.reject(err);
//     }
//     return res.json();
//   }

//   async getMovies() {
//     const res = await fetch(this._url, {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });
//     return this._getResponseData(res);
//   }
// }

// export const apiMovies = new MoviesApi(settingsMoviesApi);

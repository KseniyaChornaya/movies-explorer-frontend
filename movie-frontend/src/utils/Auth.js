class Auth {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
    this._token = localStorage.getItem("jwt");
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async signUp(name, email, password) {
    const res = await fetch(`${this._url}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    });
    return this._getResponseData(res);
  }

  async signIn(email, password) {
    const res = await fetch(`${this._url}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    });
    return this._getResponseData(res);
  }

  async editProfile(newName, newEmail) {
    const res = await fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this._token}`,
      },
      body: JSON.stringify({ name: newName, email: newEmail }),
    });
    return this._getResponseData(res);
  }

  async checkToken(jwt) {
    const res = await fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return this._getResponseData(res);
  }
}

export const auth = new Auth({
  url: "https://auth.nomoreparties.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

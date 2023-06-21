import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import CurrentUserContext from "../../context/CurrentUserContext";
import { Route, Routes } from "react-router";
import { useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Preloader from "../Preloader/Preloader";
import { auth } from "../../utils/Auth";
import { EDIT_MESSAGE } from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [authError, setAuthError] = useState("");
  const [isLoadingApp, setIsLoadingApp] = useState(true);
  // const [isLoading, setIsLoading] = useState(false);
  // const [errorStatus, setErrorStatus] = useState(false);

  // const handleGetApiMovies = async () => {
  //   setIsLoading(() => true);
  //   try {
  //     const res = await apiMovies.getMovies();
  //     setMovies(() => res);
  //   } catch (err) {
  //     console.log(err);
  //     setErrorStatus(true);
  //   } finally {
  //     setIsLoading(() => false);
  //   }
  // };

  function handleAuthError(err) {
    setAuthError(err);
  }

  async function handleUserInfo(newData) {
    try {
      const res = await auth.editProfile(newData.name, newData.email);
      setUserInfo(res);
      setAuthError(EDIT_MESSAGE);
    } catch (err) {
      if (err.status) {
        handleLogOut();
      }
      setAuthError(err.message);
    }
  }

  async function handleCheckToken() {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      try {
        const res = await auth.checkToken(jwt);
        setIsLogged(true);
        setUserInfo({
          name: res.name,
          email: res.email,
        });
        setIsLoadingApp(false);
      } catch (err) {
        if (err.status) {
          handleLogOut();
        }
        setIsLogged(false);
        navigate("/");
        // console.log(err.message);
      }
    }
    setIsLoadingApp(false);
  }

  async function handleLogin(email, password) {
    try {
      const res = await auth.signIn(email, password);
      if (res.token) {
        localStorage.setItem("jwt", res.token);
        setIsLogged(true);
        navigate("/movies");
      }
    } catch (err) {
      setAuthError(err.message);
    }
  }

  async function handleRegistration(name, email, password) {
    try {
      await auth.signUp(name, email, password);
      handleLogin(email, password);
    } catch (err) {
      setAuthError(err.message);
    }
  }

  // const signOut = () => {
  //   localStorage.removeItem("jwt");
  //   setLoggedIn(false);
  //   navigate("/");
  // };

  function handleLogOut() {
    setIsLogged(false);
    setUserInfo({});
    // setMovies([]);
    // setSearchedMovies('');
    // setIsFilteredMovies([]);
    // setSlicedMovies([]);
    // setSavedUserMovies([]);
    setAuthError("");
    localStorage.removeItem("jwt");
    // jwtToken.removeItemDataStorage();
    // moviesStorage.removeItemDataStorage();
    // searchReqStorage.removeItemDataStorage();
    // checkboxStatus.removeItemDataStorage();
    navigate("/");
  }

  useEffect(() => {
    handleCheckToken();
  }, [isLogged]);

  return (
    <div className="App">
      <div className="page">
        {isLoadingApp ? (
          <Preloader />
        ) : (
          <CurrentUserContext.Provider value={userInfo}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header />
                    <Main />
                    <Footer />
                  </>
                }
              />

              <Route
                path="/signup"
                element={
                  <Register
                    isLogged={isLogged}
                    authError={authError}
                    handleRegistration={handleRegistration}
                    handleAuthError={handleAuthError}
                  />
                }
              />
              <Route
                path="/signin"
                element={
                  <Login
                    isLogged={isLogged}
                    authError={authError}
                    handleLogin={handleLogin}
                    handleAuthError={handleAuthError}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <ProtectedRoute isLogged={isLogged}>
                      <Header />
                      <Profile
                        authError={authError}
                        onLogOutUser={handleLogOut}
                        onSetUserInfo={handleUserInfo}
                        onSetErrorInfo={handleAuthError}
                        onCheckToken={handleCheckToken}
                      />
                    </ProtectedRoute>
                  </>
                }
              />
              <Route
                path="/movies"
                element={
                  <>
                    <Header />
                    <Movies />
                    <Footer />
                  </>
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <>
                    <Header />
                    <SavedMovies />
                    <Footer />
                  </>
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </CurrentUserContext.Provider>
        )}
      </div>
    </div>
  );
}
export default App;

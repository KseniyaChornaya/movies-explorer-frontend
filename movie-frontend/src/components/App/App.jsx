import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./App";
//import PopupWithForm from "./PopupWithForm";
//import api from "../utils/Api";
import CurrentUserContext from "../../context/CurrentUserContext";
//import EditProfilePopup from "./EditProfilePopup";
//import AddPlacePopup from "./AddPlacePopup";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Register from "../Register/Register";
import { Login } from "../Login/Login";
//import { ProtectedRoute } from "./ProtectedRoute";
//import { InfoTooltip } from "./InfoTooltip";
//import { auth } from "../utils/Auth";

function App() {
  // const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="App">
      <div className="page">
        <Header
        // loggedIn={}
        // userEmail={}
        // handleUserLogOut={}
        />
        {/* <Main /> */}
        {/* <Routes>
            <Route
              path="/"
              element={
                // <ProtectedRoute loggedIn={}>
                <Main />
                // </ProtectedRoute>
              }
            />
            <Route
              path="/sign-up"
              element={<Register onRegistration={} />}
            />
            <Route path="/sign-in" element={<Login onLogin={} />} 
            />
          </Routes> */}
        <Main />
        {/* <NotFoundPage /> */}
        <Footer />
      </div>
    </div>
  );
}
export default App;

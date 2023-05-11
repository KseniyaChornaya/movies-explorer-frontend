import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import "./App";
//import api from "../utils/Api";
import CurrentUserContext from "../../context/CurrentUserContext";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Forms from "../Forms/Forms";
import Register from "../Register/Register";
import Movie from "../Movies/Movies";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
//import { ProtectedRoute } from "./ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="App">
      <div className="page">
        <Header
        // loggedIn={}
        // userEmail={}
        // handleUserLogOut={}
        />
        {/* <Main /> */}
        <Forms />
        <Profile />
        <Footer />
        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes> */}
        {/* <Movie /> */}
      </div>
    </div>
  );
}
export default App;

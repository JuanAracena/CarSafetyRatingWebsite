import React from 'react';

import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Bookmarks from "./components/Bookmarks";
import Details from "./components/Details";
import Join from "./components/Join";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';


function App() {

  //Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <BrowserRouter>
      <div id="background">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setIsLoggedIn}/>} />
        <Route path="/join" element={<Join />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

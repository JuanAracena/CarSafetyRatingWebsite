import React from 'react';

import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Details from "./components/Details";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div id="background">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;

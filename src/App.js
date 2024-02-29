// App.js

/* eslint-disable no-unused-vars */

import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestBrankas from "./components/brankas";
import NavbarPage from "./components/NavbarPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarPage />
        <Routes>
          <Route path="/" element={<TestBrankas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

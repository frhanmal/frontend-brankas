// App.js

/* eslint-disable no-unused-vars */

import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TampilanHome from "./components/TampilanHome";
import TampilanGrafik from "./components/TampilanGrafik";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TampilanHome />} />
          <Route path="/home" element={<TampilanHome />} />
          <Route path="/tampilangrafik" element={<TampilanGrafik />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

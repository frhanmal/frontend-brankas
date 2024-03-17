// App.js

/* eslint-disable no-unused-vars */

import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestBrankas, { DataAll, DataEnkripsi, DataFilter, DataTabel, RiwayatPin } from "./components/brankas";
import NavbarPage from "./components/NavbarPage";
import TampilanHome from "./components/brankas";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarPage />
        <Routes>
          <Route path="/home" element={<TampilanHome/>} />
          <Route path="/riwayat-pin" element={<RiwayatPin/>} />
          <Route path="/riwayat-status-brankas" element={<DataFilter/>} />
          {/* <Route path="/data-enkripsi" element={<DataEnkripsi/>} /> */}
          {/* <Route path="/data-filter" element={<DataFilter/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

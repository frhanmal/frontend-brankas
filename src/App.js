// App.js

/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPage from "./components/NavbarPage";
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";
import TampilanHome from "./components/tampilanHome.js";
// import DataTabel from "./components/tampilanDataTabel.js";
// import DataAll from "./components/tampilanDataAll.js";
import RiwayatPin from "./components/tampilanRiwayatPin.js";
import DataFilter from "./components/tampilanDataFilter.js";
import "./index.css";
import DataAll from "./components/tampilanDataAll.js";



function App() {

  const users = JSON.parse(sessionStorage.getItem("users"));

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <NavbarPage />
                <Routes>
                  <Route path="/home" element={<TampilanHome />} />
                  <Route path="/" element={<Login />} />
                  {/* <Route path="/register" element={<Register />} /> */}
                  <Route path="/riwayat-pin" element={<RiwayatPin />} />
                  <Route path="/riwayat-status-brankas" element={<DataFilter />}/>
                  {/* <Route path="/data-enkripsi" element={<DataEnkripsi />} /> */}
                  {/* <Route path="/data-filter" element={<DataFilter />} /> */}
                </Routes>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

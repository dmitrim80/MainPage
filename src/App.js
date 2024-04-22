// import React,{ useState, useEffect } from "react"
import React from "react";
import Main from "./Main_Page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Corals from "./Corals_Page/CoralMain";
import Bootstrap from './Bootstrap_Page/Main';
import './Corals_Page/corals_page.css';
import './Main_Page/main.css';




export default function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/corals/*" element={<Corals />} />
        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

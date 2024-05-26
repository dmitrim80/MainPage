// import React,{ useState, useEffect } from "react"
import React from "react";
import Main from "./Main_Page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Main_Page/main.css";
import ViewIP from "./Main_Page/ViewIP";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/viewip" element={<ViewIP />} />
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<div>Archive</div>} />
      </Routes>
    </BrowserRouter>
  );
}

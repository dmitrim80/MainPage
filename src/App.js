// import React,{ useState, useEffect } from "react"
import React from "react";
import Main from "./Main_Page/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./Main_Page/main.css";
import ViewIP from "./Main_Page/ViewIP";
import Archive from "./Main_Page/Archive";
import SOAeg from "./Main_Page/SOAeg";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/viewip" element={<ViewIP />} />
        <Route path="/" element={<Main />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/SOAExample" element={<SOAeg />} />
      </Routes>
    </BrowserRouter>
  );
}

// import React,{ useState, useEffect } from "react"
import React from 'react';
import Main from './Main_Page/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlackJack from './BlackJack/BlackJack';
import './BlackJack/blackjack.css';
import './Main_Page/main.css';
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import Bootstrap from "./Boot";
// import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
                                              


export default function App() {

  
//   const [isLoading, setIsLoading] = useState(true); 
//   const [darkMode, setDarkMode] = useState(false);


//   function toggleDarkMode() {
//     setDarkMode(!darkMode);
//   }
//   useEffect(() => {
//     document.body.style.backgroundColor = darkMode ? '#23252C' : '#ccc';
//     document.body.style.color = darkMode ? '#ccc' : '#23252C';
//   }, [darkMode]);

//   useEffect(() => {
//     if (darkMode) {
//         document.body.classList.add("dark-mode");
//     } else {
//         document.body.classList.remove("dark-mode");
//     }
// }, [darkMode]);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/blackjack" element={<BlackJack/>}/>
        </Routes>
      </BrowserRouter>
        
    )
}
// import React,{ useState, useEffect } from "react"
import React, { useEffect, useState } from 'react'
import './App.css'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import Bootstrap from "./Boot";
// import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import BlackJack from './BlackJack/BlackJack'


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
      <>
      

      <BlackJack/>
     
        {/* <Header/>
        <Main/>
        <Footer/> */}
        
      </> 
    )
}
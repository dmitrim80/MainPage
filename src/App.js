import React,{ useState, useEffect } from "react"
import './App.css'
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"

import Homepage from "./Homepage"
import Acro from "./Acro"
import Aquascape from "./Aquascape"
import Chalice  from "./Chalice"
import Favia from "./Favia"
import FishTankFurn from "./FishTankFurn"
import Monti from "./Monti"
import Mushrooms from "./Mushrooms"
import NPSCorals from "./NPSCorals"
import Scoly from "./Scoly"
import Zoas from "./Zoas"

// import {db} from './firebase-config';
// import Option1 from "./Option1";
// import Option2 from "./Option2";
// import Option3 from "./Option3";
// import Option4 from "./Option4";
// import Experiment from './Experiment'
// import Authentication from "./Authentication";

export default function App() {

  const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe(); // Cleanup subscription
    }, []);

  const routes = [
    { path: "/Login", component: Login, protected: false },
    { path: "/Homepage", component: Homepage, protected: true },
    { path: "/Acro", component: Acro, protected: true },
    { path: "/Aquascape", component: Aquascape, protected: true },
    { path: "/Chalice", component: Chalice, protected: true },
    { path: "/Favia", component: Favia, protected: true },
    { path: "/FishTankFurn", component: FishTankFurn, protected: true },
    { path: "/Monti", component: Monti, protected: true },
    { path: "/Mushrooms", component: Mushrooms, protected: true },
    { path: "/NPSCorals", component: NPSCorals, protected: true },
    { path: "/Scoly", component: Scoly, protected: true },
    { path: "/Zoas", component: Zoas, protected: true }
  ]
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#23252C' : '#F5F5F5';
    document.body.style.color = darkMode ? '#F5F5F5' : '#23252C';
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  
    return (
      <>
        <Router>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentUser={currentUser} />
          <Routes>
          <Route path="/" element={currentUser ? <Homepage /> : <Login />} />
          {routes.map(({ path, component: Component,  protected: isProtected }) => (
            <Route 
              key={path} 
              path={path} 
              element={isProtected ? <ProtectedRoute><Component /></ProtectedRoute>: <Component />} 
            />
          ))}
          </Routes>
        </Router>
        <Footer darkMode={darkMode} />
      </> 
    )
}
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

export default function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return () => unsubscribe(); // Cleanup subscription
    }, []);

  const routes = [
    { path: "/Login", component: Login, protected: false, darkMode },
    { path: "/Homepage", component: Homepage, protected: true, darkMode },
    { path: "/Acro", component: Acro, protected: true, darkMode },
    { path: "/Aquascape", component: Aquascape, protected: true, darkMode },
    { path: "/Chalice", component: Chalice, protected: true, darkMode },
    { path: "/Favia", component: Favia, protected: true, darkMode },
    { path: "/FishTankFurn", component: FishTankFurn, protected: true, darkMode },
    { path: "/Monti", component: Monti, protected: true, darkMode },
    { path: "/Mushrooms", component: Mushrooms, protected: true, darkMode },
    { path: "/NPSCorals", component: NPSCorals, protected: true, darkMode },
    { path: "/Scoly", component: Scoly, protected: true, darkMode },
    { path: "/Zoas", component: Zoas, protected: true, darkMode }
  ]
  
  
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#23252C' : '#8378ED';
    document.body.style.color = darkMode ? '#8378ED' : '#23252C';
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }
}, [darkMode]);
 
  
    return (
      <>
        <Router>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} currentUser={currentUser} />
          <Routes>
            <Route path="/" element={currentUser ? <Login /> : <Homepage />} />
            {routes.map(({ path, component: Component,  protected: isProtected, darkMode }) => (
              <Route 
                key={path} 
                path={path} 
                element={isProtected 
                  ? <ProtectedRoute>{<Component darkMode={darkMode} />}</ProtectedRoute>
                  : <Component darkMode={darkMode}/>} 
              />
            ))}
          </Routes>
        </Router>
        <Footer darkMode={darkMode} />
      </> 
    )
}
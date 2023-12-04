import React from "react";
import './App.css';
import Option1 from "./Option1";
import Option2 from "./Option2";
// import Option3 from "./Option3";
// import Option4 from "./Option4";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(true)
  
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }

  const date = new Date()
  const hours = date.getHours()

  React.useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#23252C' : '#F5F5F5';
    document.body.style.color = darkMode ? '#F5F5F5' : '#23252C';
  },[darkMode])

  let timeOfDay
  if (hours > 3 && hours < 5) {
    timeOfDay = "VERY Early Morning";
  } else if (hours < 11) {
      timeOfDay = "morning";
  } else if (hours <= 17) {
      timeOfDay = "day";
  } else if (hours < 23) {
      timeOfDay = "evening";
  } else if (hours > 23 || hours < 3) {
      timeOfDay = "night";
  }


    return (
      <div lassName={darkMode ? "dark" : ""}>
          
          {darkMode ?
            <Option1 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            /> :
            <Option2 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            />
          }
          
          {/* <Option1 /> <Option3 /> */}
          {/* <Option2 /> <Option4 /> */}
          <div align="center">
            <p>{date.toLocaleDateString()} and {date.toLocaleTimeString()} </p>
            <p>Good {timeOfDay}!</p>
          </div>
      </div>  
    )
}
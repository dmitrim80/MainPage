import React from "react";
import './App.css';
import Option1 from "./Option1";
import Option2 from "./Option2";
import Option3 from "./Option3";
import Option4 from "./Option4";

export default function App() {
    return (
      <div className="container">
          <Option1 /> <Option3 />
          <Option2 /> <Option4 />
      </div>  
    )
}
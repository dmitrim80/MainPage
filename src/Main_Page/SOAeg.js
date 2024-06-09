import React,{useState,useEffect} from 'react'
import './soa.css'
import './archive.css'

const SOAeg = () => {
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: -2,
    y: -2,
  });
  useEffect(() => {
    const updateSpotlightPosition = (e) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateSpotlightPosition);
    return () => {
      window.removeEventListener("mousemove", updateSpotlightPosition);
    };
  }, []);
  return (
    <>
    <div className="archive-container">
    <div
          className="overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle 100px at 
                ${spotlightPosition.x}px 
                ${spotlightPosition.y}px, 
                rgba(4, 79, 226,0.09) 0%,
                rgba(0,0,0,0.2) 700%)`,
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
        <a href="/archive" className="project-link">
          <span
            id="project-arrow-archive"
            role="img"
            aria-label="Link to project"
          >
            ←
          </span>
          <span className="project-header-archive">All Projects</span>
        </a><br/>
        <a href="/" className="project-link">
          <span
            id="project-arrow-archive"
            role="img"
            aria-label="Link to project"
          >
            ←
          </span>
          <span className="project-header-archive">Dmitri Morozov</span>
        </a>
    <div>
        <p className='container h6 text-left m-4'>
        Implementing a Service-Oriented Architecture (SOA) in my portfolio React app involves creating services that can be consumed by different parts of my application. <br /><br />
        
        Example of SOA in my web app: I separate the IP storage logic into a dedicated service (ipService.js). This service can be consumed by React components, providing a clear separation of concerns. <br /><br />
        
        Step-by-step implementation: <br /><br />
        
        1. Service Creation: <br />
        First, I create a service that handles the IP storage functionality. This service will be a standalone module that your React components can use. This service handles the logic of fetching the IP address and storing it in Firestore. <br /><br />
        
        <pre><code>{`// services/ipService.js
import { db } from "../firebaseConfig";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";

export const storeVisit = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const { ip } = await response.json();
    if (!ip) {
      throw new Error("Unable to retrieve IP address");
    }

    const visitsCollectionRef = collection(db, "ip_visits");
    const visitData = {
      ip: ip.trim(),
      timestamp: serverTimestamp(),
    };
    await addDoc(visitsCollectionRef, visitData);
  } catch (error) {
    console.error("Error storing visit:", error);
    throw error;
  }
};`}</code></pre><br />
        
        2. Service Usage: <br />
        Use the service in a React component. In the Main component, I imported the storeVisit service and used it inside a useEffect hook to store the IP visit when the component mounts. <br /><br />
        
        <pre><code>{`import { storeVisit } from "../services/ipService"; // importing the service

useEffect(() => {
  const storeIpVisit = async () => {
    try {
      await storeVisit(); // service is being used here.
    } catch (error) {
      console.error("Failed to store visit:", error);
    }
  };

  storeIpVisit();
}, []);`}</code></pre><br />
        
        Benefits of This Approach: <br /><br />
        
        • Separation of Concerns: The logic for IP storage is separated from the React component, making the component easier to maintain and test. <br />
        • Reusability: The `storeVisit` service can be reused in other components or parts of the application if needed. <br />
        • Scalability: If I need to change how IP addresses are stored (e.g., changing the database or adding additional data), I only need to update the service without modifying the component logic. <br /><br />
        
        This example demonstrates how I can apply SOA principles in your React application by creating modular and reusable services.
        </p>

      </div>
    </div>
    </>
    
  )
}

export default SOAeg
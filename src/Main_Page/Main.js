import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import { debounce } from "./Utilities";
import { db } from "./firebaseConfig";
import { doc,getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

import "./main.css";

const Main = () => {
  const [activeLink, setActiveLink] = useState("about");
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {
    // The handleScroll function that you want to debounce
    const handleScroll = () => {
      const sections = ["about", "interests", "projects"]; // Update with your section IDs
      let currentActiveLink = "";
      const scrollPosition = window.scrollY;

      sections.forEach((sectionId) => {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          const sectionHeight = sectionEl.offsetHeight;
          // Check if the section is at least halfway in view
          if (
            scrollPosition >= sectionTop - sectionHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight / 2
          ) {
            currentActiveLink = sectionId;
          }
        }
      });

      setActiveLink(currentActiveLink);
    };

    // Apply debounce to the handleScroll function
    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []); // Note: Since debounce creates a new function, dependencies related to the effect should be stable or included in the dependency array.

  useEffect(() => {
    const updateSpotlightPosition = (e) => {
      setSpotlightPosition({ x: e.clientX, y: e.clientY });
    };

    // Listen for mouse movement across the entire window
    window.addEventListener("mousemove", updateSpotlightPosition);

    return () => {
      window.removeEventListener("mousemove", updateSpotlightPosition);
    };
  }, []);

  useEffect(() => {
    // Example IP fetch and update logic
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(async (data) => {
            const ip = data.ip; // Assuming the IP address is retrieved correctly
            const ipRef = doc(db, "visitorIPs", ip);

            // Attempt to get the document
            const docSnap = await getDoc(ipRef);
            if (docSnap.exists()) {
                // Document exists, update it
                updateDoc(ipRef, {
                    visits: increment(1),
                    lastVisit: new Date()
                })
                .then(() => console.log("Document successfully updated"))
                .catch(error => {
                    console.error("Error updating document: ", error);
                    alert("Failed to update data: Insufficient permissions.");
                });
            } else {
                // Document does not exist, create it
                setDoc(ipRef, {
                    ip: ip,
                    visits: 1,
                    firstVisit: new Date(),
                    lastVisit: new Date()
                });
            }
        })
        .catch(error => console.error("Error fetching IP:", error));
}, []);

  return (
    <>
      <main className="main-box">
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
                rgba(255,255,255,0.055) 0%,
                rgba(0,0,0,0.2) 700%)`,
            pointerEvents: "none", // Allow clicks to pass through
            zIndex: 9999,
          }}
        ></div>

        <aside>
          <Header activeLink={activeLink} setActiveLink={setActiveLink} />
        </aside>

        <div className="spacer"></div>

        <section className="body-wrapper">
          <Body />
        </section>
      </main>
    </>
  );
};

export default Main;

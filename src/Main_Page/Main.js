import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./Body";
import Archive from "./Archive";
import { debounce } from "./Utilities";
import { storeVisit } from "./services/ipService";

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
      const sections = ["about", "interests", "projects", "archive","soaexample"]; // Update with your section IDs
      let currentActiveLink = "";
      const scrollPosition = window.scrollY;

      sections.forEach((sectionId) => {
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          const sectionHeight = sectionEl.offsetHeight;
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
    const storeIpVisit = async () => {
      try {
        await storeVisit(); // Call the function to store the visit in the database
      } catch (error) {
        console.error("Failed to store visit:", error);
      }
    };

    storeIpVisit();
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
                rgba(4, 79, 226,0.09) 0%,
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
          {activeLink === "archive" ? <Archive /> : <Body />}
        </section>
      </main>
    </>
  );
};

export default Main;

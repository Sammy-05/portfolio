import React, { useState, useEffect } from "react";
import './style.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import resumePDF from '../../assets/Resume.pdf';

const Navbar = (props) => {
  const page = props.page;
  const navigate = useNavigate();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openResume = () => {
    window.open(resumePDF, "_blank")
  };

  const handleContactButtonClick = () => {
    // Scroll to the end of the page when the contact button is clicked
    const endOfPageY = document.documentElement.scrollHeight;
    window.scrollTo({ top: endOfPageY, behavior: "smooth" });
  };

  const navbarClass = isSticky ? "navbar sticky w-full" : "navbar w-full";
  const textColor = isSticky ? "text-linecolor" : "text-linecolor";
  const bgColor = isSticky ? "bg-pageBackground" : "bg-navbarUp";

  const navbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 9999, // Set a high z-index value to ensure the navbar is on top of other elements
  };

  return (
    <div className={navbarClass} style={navbarStyle}>
      <div className={`flex flex-row text-base ${bgColor}`}>
        <div className="flex w-1/4 items-center">
          <img src={logo} alt="logo" className="w-15 h-10 ml-4" />
        </div>

        <div className="flex w-3/4 flex-row justify-end items-center gap-x-20 ">
          <p className={`barbelow ${page === "home" ? " text-secondaryText font-semibold" : textColor} hover:font-medium`} onClick={() => { navigate('/') }}>Home</p>
          <p className={`barbelow ${page === "about" ? "text-secondaryText font-semibold" : textColor} hover:font-medium`} onClick={() => { navigate('/about') }}>About</p>
          <p className={`barbelow ${page === "project" ? "text-secondaryText font-semibold" : textColor}  hover:font-medium`} onClick={() => { navigate('/projects') }}>Projects</p>
          <p className={`barbelow ${textColor}  hover:font-medium`} onClick={openResume}>Resume</p>
          <button className={`rounded-lg border border-black px-5 py-2 m-4 ${textColor} hover:bg-secondaryText hover:text-linecolor transition-all duration-300`} onClick={handleContactButtonClick}>Contact</button>
        </div>

      </div>
    </div>

  );
};

export default Navbar;

import "../Styles.css"
import "../Search.css"
import React, { Component, useEffect } from "react";


import { useNavigate } from "react-router-dom";
import { Content } from "../data/Content";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import SearchBox from "../components/SearchBox";
import BoxMenuDrop from "../components/BoxMenuDrop";
import ProfileMenuDrop from "../components/ProfileMenuDrop";
import Footer from "../components/Footer";

function Home() {
    const navigate = useNavigate();
  
    // These values will be shown in the search dropdown
    // The name property is the actual text and the value property is the link
    const options = [
    
      {
        name: "about",
        value: "about"
      },
      {
        name: "education",
        value: "education"
      },
      { name: "works", value: "works" },
      { name: "Extra Curriculars", value: "extracurriculars" },
      { name: "images", value: "images" },
      { name: "social", value: "social" }
    ];
  
    // Website search
    const searchWebsite = () => {
      let path = document.querySelector(".search-input").value;
      // When search is triggered, add the value entered into the search bar to the url
      if (path) {
        navigate(`/${path}`);
      }
    };
  
    useEffect(() => {
        const inputField = document.querySelector(".search-input");
        if (inputField) {
          const handleKeyUp = (event) => {
            if (event.key === "Enter") {
              searchWebsite();
            }
          };
          inputField.addEventListener("keyup", handleKeyUp);
          return () => inputField.removeEventListener("keyup", handleKeyUp);
        }
      }, []);
      
    // I'm Feeling Lucky search
    function feelingLucky() {
      let path = document.querySelector(".search-input").value;
  
      // Route to random page if search input is empty
      if (!path) {
        navigate(`/${options[Math.floor(Math.random() * options.length)].value}`);
      return;
      }
  
      /* Get all elements matching the search term */
      const item = Content.filter((item) => item.category === path);
  
      // Get the link of the first match
      // Redirect to first match, if it exists
      if (item[0]) {
        const url = item[0].link;
        window.location.href = url;
      } else if (path) {
        navigate(`/${path}`);
      }
    }
  
    return (
      <div className="home main">
        <div className="top-menu">
          <span className="top-menu-item no-show-mobile">
            {" "}
            <a href="mailto:aditi03prasad@gmail.com"> Email </a>
          </span>
          <span className="top-menu-item no-show-mobile">
            {" "}
            <a href="https://github.com/aditiiprasad"> GitHub </a>
          </span>
          <BoxMenuDrop />
          <ProfileMenuDrop />
        </div>
       <div className="flex-center">
        <div className="search-container">
          <div className="frontpage-logo">
           <Logo/>
          </div>
            <SearchBox options={options} />
          <div className="search-btns">
            <input
              className="search-btn sw"
              type="button"
              value="Search Website"
              onClick={searchWebsite}
            />
            <input
              className="search-btn ifl"
              type="button"
              value="I'm Feeling Lucky"
              onClick={feelingLucky}
            />
          </div>
        </div>
        </div>
  
        <Footer/>
      </div>
    );
  }
  export default Home;
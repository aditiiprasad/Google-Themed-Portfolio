import React from "react";
import Logo from "../components/logo";
import BoxMenuDrop from "../components/boxmenudrop";
import ProfileMenuDrop from "../components/ProfileMenuDrop";
import SearchBox from "../components/SearchBox";
import "./home.css";

const Home = () => {
  const options = [
    { name: "everything about you", value: "all" },
    { name: "about", value: "about" },
    { name: "works", value: "works" },
    { name: "writing", value: "writing" },
    { name: "images", value: "images" },
    { name: "social", value: "social" },
  ];

  return (
    <div className="home main">
      <div className="top-menu">
         <span className="top-menu-item no-show-mobile">
          <a href="mailto:aditi03prasad0@gmail.com">Email</a>
        </span>
        <span className="top-menu-item no-show-mobile">
          <a href="https://github.com/aditiiprasad">GitHub</a>
        </span>
        <BoxMenuDrop />
      <ProfileMenuDrop/>
      </div>

      <div className="flex-center">
        <div className="search-container">
          <div className="frontpage-logo">
            <Logo />
          </div>

          <SearchBox />
          <div className="search-btns">
            <input className="search-btn sw" type="button" value="Projects" />
            <input className="search-btn ifl" type="button" value="another Portfolio" />
          </div>
        </div>
      </div>

      <footer className="footer">
      {/* Country Section */}
      <div className="country">Bengaluru, India</div>
      
      {/* Footer Links Section */}
      <div className="footer-links">
        {/* Left Links Section */}
        <div className="footer-links-section">
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Blog</a>
          <a href="aditi03prasad@gmail.com">Email</a>
        </div>

        {/* Right Links Section */}
        <div className="footer-links-section">
          <a href="https://github.com/aditiiprasad">GitHub</a>
          <a href="https://www.linkedin.com/in/aditiiprasad/">LinkedIn</a>
          <a href="mailto:aditi03prasad@gmail.com">Email</a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Home;

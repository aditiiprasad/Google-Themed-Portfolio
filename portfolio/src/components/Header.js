import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./logo";
import TopSearchBox from "./TopSearchBox";
import BoxMenuDrop from "./boxmenudrop";
import ProfileMenuDrop from "./ProfileMenuDrop";

const Header = () => {
  return (
    <div className="menu">
      <div className="menu-section">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <div className="topmenu-menu-search menu-search">
          <TopSearchBox />
        </div>
      </div>
      <div className="menu-section">
        <div className="header-profile-icons">
          <BoxMenuDrop />
          <ProfileMenuDrop />
        </div>
      </div>
    </div>
  );
};

export default Header;
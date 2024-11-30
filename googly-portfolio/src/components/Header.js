import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import BoxMenuDrop from "./BoxMenuDrop";
import ProfileMenuDrop from "./ProfileMenuDrop";
import TopSearchBox from "./TopSearchBox";

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
import "./FilterMenu.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faImage,
  faNewspaper,
  faMapMarkerAlt,
  faBriefcase
  
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const FilterMenu = () => {


  return (
    <div className="filter-menu">
      <div className="filter-menu-items">
        <NavLink
          className="filter-menu-item"
          to="/about"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faSearch} />
          <span> About </span>
        </NavLink>
        <NavLink
          to="/projects"
          activeClassName="item-active"
          className="filter-menu-item fmi"
        >
          <FontAwesomeIcon className="icon" icon={faBriefcase} />
          <span> Projects </span>
        </NavLink>

        <NavLink
          className="filter-menu-item"
          exact
          to="/education"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faNewspaper} />
          <span> Education </span>
        </NavLink>

        <NavLink
          className="filter-menu-item fmi"
          to="/images"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faImage} />
          <span> Images </span>
        </NavLink>
        <NavLink
          className="filter-menu-item fmi"
          to="/extracurriculars"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faNewspaper} />
          <span> Extra Curriculars </span>
        </NavLink>
        <NavLink
          className="filter-menu-item"
          exact
          to="/social"
          activeClassName="item-active"
        >
          <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
          <span> Socials </span>
        </NavLink>
      </div>
    </div>
  );
};

export default FilterMenu;
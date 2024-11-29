import "./boxmenudrop.css";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/e-logo.png";
import li from "../images/linkedIn-icon.png";
import gh from "../images/github-icon.png";
import news from "../images/newspaper.png";
import suitcase from "../images/suitcase.png";
import email from "../images/gmail-icon.png";
import img from "../images/image.png";
import about from "../images/info.png";
import AppsIcon from '@mui/icons-material/Apps';

const BoxMenuDrop = () => {
  const [isActive, setActive] = useState(false); // Set state to false initially

  // Toggle the dropdown
  const handleToggle = () => {
    setActive(!isActive);
  };

  // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false); // set dropdown to closed
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef);

  return (
    <div className="dropdown" onClick={handleToggle} ref={wrapperRef}>
      <FontAwesomeIcon className="fas fa-th dropbtn" icon={faTh} />
      <div
        id="drop"
        className={
          isActive
            ? "dropdown-content-cont dropdown-show"
            : "dropdown-content-cont dropdown-hide"
        }
      >
        <div className="drop-item">
          <div className="drop-link">
            <img src={logo} alt="" />
            <p> Search </p>
          </div>
          <div className="drop-link">
            <img src={about} alt="" />
            <p> About </p>
          </div>
          <div className="drop-link">
            <img src={suitcase} alt="" />
            <p> Works </p>
          </div>
          <div className="drop-link">
            <img src={news} alt="" />
            <p> Blog </p>
          </div>
          <div className="drop-link">
            <img src={img} alt="" />
            <p> Images </p>
          </div>
          <a className="drop-link" href="mailto:aditi03prasad@gmail.com">
            <img src={email} alt="" />
            <p> Email </p>
          </a>
          <a className="drop-link" href="https://github.com/aditiiprasad">
            <img src={gh} alt="" />
            <p> GitHub </p>
          </a>
          <a className="drop-link" href="https://www.linkedin.com/in/aditiiprasad/">
            <img src={li} alt="" />
            <p> LinkedIn </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoxMenuDrop;

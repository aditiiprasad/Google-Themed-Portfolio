import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://media.licdn.com/dms/image/v2/D5603AQFBdsOzm6b-sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715138916437?e=1738195200&v=beta&t=WR_Rz5hnKfpSQyi2Fw6l8gg95kZGSGp9JjdC2JYES2k"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> Portfolio Website </p>
        <p> Aditi </p>
        <p> aditi03prasad@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
             src="https://media.licdn.com/dms/image/v2/D5603AQFBdsOzm6b-sw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715138916437?e=1738195200&v=beta&t=WR_Rz5hnKfpSQyi2Fw6l8gg95kZGSGp9JjdC2JYES2k"
             alt="profile"
          />
          <p className="detail-text"> Aditi </p>
          <p className="detail-text"> aditi03prasad@gmail.com </p>
          <a href="https://portfolio-aditi-one.vercel.app/"> View Another Website Design (Retro)</a>
        </div>
        <div className="second-detail" >
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </div>
        <div className="third-detail">
          <a href="https://github.com/aditiiprasad"> GitHub</a>
        </div>
        <div className="fourth-detail">
          <a href="https://github.com/aditiiprasad/Google-Themed-Portfolio"> View code </a> <span> • </span>
          <div to="/blog"> Blog & news </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./TopSearchBox.css"; // Importing the CSS file

const TopSearchBox = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue) {
      window.location.href = `/${searchValue}`;
    }
  };

  const clearInput = () => {
    setSearchValue("");
  };

  useEffect(() => {
    const closeIcon = document.querySelector(".clear-icon");
    if (searchValue) {
      closeIcon.style.display = "inline-block";
    } else {
      closeIcon.style.display = "none";
    }
  }, [searchValue]);

  return (
    <div className="topsearchbox-container">
      <div className="topsearchbox">
        <FontAwesomeIcon className="fa-search-icon" icon={faSearch} />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
          onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        />
        <FontAwesomeIcon
          className="clear-icon"
          icon={faTimes}
          onClick={clearInput}
        />
        
      </div>
    </div>
  );
};

export default TopSearchBox;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // Search icon from React Icons
import "./searchbox.css"; // Custom styles for the search box

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect

  const suggestions = [
    "About",
    "Education",
    "Projects",
    "Activities",
    "GitHub",
    "LinkedIn",
    "Blog",
    "Images",
    "Contact",
  ];

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // Delay hiding dropdown to allow clicking on suggestions
    setTimeout(() => setIsFocused(false), 100);
  };

  // Handlers for hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="search-container">
      <div
        className="search-box"
        onMouseEnter={handleMouseEnter} // Trigger hover
        onMouseLeave={handleMouseLeave} // Trigger hover out
      >
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="search-input"
          placeholder="Search..."
        />
      </div>

      {/* Suggestions show if focused, hovered, or query is present */}
      {(isFocused || isHovered || query) && (
        <div className="suggestions-box">
          {suggestions
            .filter((suggestion) =>
              suggestion.toLowerCase().includes(query.toLowerCase())
            )
            .map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                {suggestion}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;

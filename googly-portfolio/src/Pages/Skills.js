import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";



import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";
import AllResultsCard from "../components/AllResultsCard";
import Header from "../components/Header";


function Skills() {
  const skills = Content.filter((item) => item.category === "skills");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          Skills {skills.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={skills} />
      </div>
      <Footer />
    </div>
  );
}
export default Skills;
import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";



import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";
import AllResultsCard from "../components/AllResultsCard";
import Header from "../components/Header";


function Projects() {
  const projects = Content.filter((item) => item.category === "projects");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
         Projects {projects.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={projects} />
      </div>
      <Footer />
    </div>
  );
}
export default Projects;
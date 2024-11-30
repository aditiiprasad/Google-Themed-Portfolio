import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";
// import Layout from "../components/header";


import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";
import AllResultsCard from "../components/AllResultsCard";
import Header from "../components/Header";


function About() {
  const about = Content.filter((item) => item.category === "about");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {about.length} results (0.43 seconds)
        </p>
        <AllResultsCard results={about} />
      </div>
      <Footer />
    </div>
  );
}
export default About;
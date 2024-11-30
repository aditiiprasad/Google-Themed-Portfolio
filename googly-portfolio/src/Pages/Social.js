import React, { useState } from "react";
import { Content } from "../data/Content";
import { StrictMode } from "react";

import AllResultsCard from "../components/AllResultsCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";

function Social() {
  const contact = Content.filter((item) => item.category === "social");
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {contact.length} results (0.57 seconds)
        </p>
        <AllResultsCard results={contact} />
      </div>
      <Footer />
    </div>
  );
}
export default Social;
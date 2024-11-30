import React, { useState } from "react";
import PropTypes from "prop-types";
import { ProjectsContent } from "../data/ProjectsContent";
import "./ProjectsPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";

const ProjectsPage = ({ results }) => {
  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container">
        <p className="result-count">
          About {ProjectsContent.length} results (0.84 seconds)
        </p>
        <div className="projects-content">
          {ProjectsContent.map((item) => (
            <div className="projects-card">
              <a href={`${item.link}`} className="project-link">
                <p> {`${item.link}`} </p>
                <h3>{`${item.name}`}</h3>
              </a>
              <div className="projects-details">
                <div className="projects-img-container">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="projects-text-container">
                  <p className="projects-excerpt">{`${item.excerpt}`}</p>
                  <p className="projects-tools">{`${item.tools}`}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
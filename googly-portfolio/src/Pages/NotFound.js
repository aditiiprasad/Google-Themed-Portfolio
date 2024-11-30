import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import AllResultsCard from "../components/AllResultsCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterMenu from "../components/FilterMenu";

function NotFound() {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = " ";
  if (arr) {
    val = arr[0];
  }

  return (
    <div className="main">
      <Header />
      <FilterMenu />
      <div className="all-results-container notfound-page">
        <div className="suggest">
          <p> Did you mean: </p>
          <div className="suggestions">
            <Link to="/projects"> Projects </Link>
            <Link to="/about"> About </Link>
            <Link to="/images"> Images</Link>
            <Link to="/social"> Social </Link>
            <Link to="/education"> Education </Link>
          </div>
        </div>
        <div className="notfound-details">
          <p> No results containing all your search terms were found.</p>
          <p>
            {" "}
            Your search - <b> {val} </b> - did not match any documents.
          </p>
          <p> Suggestions: </p>
          <ul>
            <li>Try a different keyword from the search dropdown</li>
            <li>Make sure that all words are spelled correctly.</li>
            <li>Click one of the links from the suggestions or menu above</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default NotFound;
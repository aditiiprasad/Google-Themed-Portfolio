import "./Styles.css";
import "./Search.css";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

// import works from "./pages/works";
// import Home from "./pages/home";
// import writing from "./pages/writing";
// import social from "./pages/social";
// import AllResults from "./pages/allResults";
// import NotFound from "./pages/notFound";
// import ProjectsPage from "./pages/projectsPage";
// import ImagesPage from "./pages/imagesPage";
// import BlogPage from "./pages/blogPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path="/all" component={AllResults} /> */}
        <Route path="/about" element={<About/>} />
      {/* //     <Route path="/writing" component={writing} />
      //     <Route path="/works" component={works} />
      //     <Route path="/social" component={social} />
      //     <Route path="/projects" component={ProjectsPage} />
      //     <Route path="/images" component={ImagesPage} />
      //     <Route path="/blog" component={BlogPage} />
      //     <Route component={NotFound} /> */}
     
      </Routes>
      </Router>
      
    );
  }
}
export default App;
import './App.css';
import Home from './Pages/home';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import About from './Pages/About';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/all" element={<AllResults />} />
        <Route path="/about" element={<About />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/works" element={<Works />} />
        <Route path="/social" element={<Social />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/images" element={<ImagesPage />} />
        <Route path="/blog" element={<BlogPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

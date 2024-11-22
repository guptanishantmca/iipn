import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <div>
      <Header></Header>
        {/* Navigation Menu */}
        {/* <nav className="bg-gray-200 p-4">
          <a href="/" className="mr-4 hover:text-blue-500">Home</a>
          <a href="/about" className="mr-4 hover:text-blue-500">About</a>
          
        </nav> */}
      
        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

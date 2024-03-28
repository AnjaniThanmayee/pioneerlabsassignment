import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; 
import "./App.css";
import SideNav from "./SideNav";
import Graphs from "./Graphs";
import Crypto from "./Crypto";
import Wallet from "./Wallet";
function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="sidenav"> 
        {/* Navbar */}
          <SideNav /> 
        </div>
        <div className="routes-container">
          {/* Other routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

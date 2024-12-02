import React from "react";
import { Routes, Route } from "react-router-dom";
import Results from "./Pages/Results";
import Home from "./Pages/Home";
import Buycredits from "./Pages/Buycredits";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/buycredits" element={<Buycredits />} />
      </Routes>
    </div>
  );
};

export default App;

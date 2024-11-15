import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
// import Home from "./components/Home";
// import ReportedLostItems from "./components/ReportedLostItems";
// import FoundItems from "./components/FoundItems";
// import ClaimedItems from "./components/ClaimedItems";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/" element={<Home />} />
      <Route path="/reported-lost" element={<ReportedLostItems />} />
      <Route path="/found-items" element={<FoundItems />} />
      <Route path="/claimed-items" element={<ClaimedItems />} /> */}
    </Routes>
  );
};

export default RoutesConfig;

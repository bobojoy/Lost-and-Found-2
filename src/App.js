import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import RoutesConfig from "./Routes"; // Import RoutesConfig to handle routing
import Navbar from "./Components/NavBar"; // Import Navbar if you want it to appear globally

function App() {
  return (
    <Router>
      {/* Wrap your app in BrowserRouter */}
      <div>
        <Navbar /> {/* Include the Navbar component */}
        <RoutesConfig /> {/* Include RoutesConfig to display the routes */}
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import User from "./User/Components"; // Adjust if you have specific subcomponents
import Admin from "./Admin/Components"; // Adjust if you have specific subcomponents

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/user" component={User} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </Router>
  );
};

export default App;

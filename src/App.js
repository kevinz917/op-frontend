import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewItem from "./pages/NewItem/NewItem";
import "./common/styles/colors.scss";
import "./common/styles/typography.scss";
import "./common/styles/overall.scss";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="overall-page-container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/new" component={NewItem} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

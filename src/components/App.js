import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import classes from "../css/app.module.css";
import Header from "./Header";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Gallery from "./Gallery";

class App extends React.Component {
  state = {
    path: "/gallery",
    label: "Gallery",
  };

  componentDidMount() {}

  handleLinkClick = (path, label) => {
    this.setState({
      path,
      label,
    });
  };
  render() {
    return (
      <div className={classes.mainContainer}>
        <Router>
          <Header
            path={this.state.path}
            label={this.state.label}
            click={(path, label) => this.handleLinkClick(path, label)}
          />
          <Switch>
            <Route exact path="/">
              <div className={classes.homeContainer}>
                <Sidebar posts={this.state.posts} />
                <Home />
              </div>
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";

import { testApi } from "../actions";

const Landing = () => <div>Express/React App Boilerplate</div>;

class App extends Component {
  componentDidMount() {
    this.props.testApi();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
          </div>
        </BrowserRouter>
        <div>API Works?: {this.props.test ? "YES!" : "NO!"}</div>
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(
  mapStateToProps,
  { testApi }
)(App);

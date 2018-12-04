import React, { Component } from "react";
import { connect } from "react-redux";

import { testApi } from "../actions";
import strings from "../translations";

class Landing extends Component {
  componentDidMount() {
    this.props.testApi();
  }

  render() {
    return (
      <div>
        <div>{strings.boilerplate}</div>

        <div>
          {strings.TestComponent.api_works}{" "}
          <span style={{ "text-transform": "uppercase" }}>
            {this.props.test ? strings.yes : strings.no}
          </span>
        </div>

        <div>
          {strings.formatString(
            strings.TestComponent.qbf.the_quick_brown,
            strings.TestComponent.qbf.dog,
            strings.TestComponent.qbf.fox
          )}
        </div>
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
)(Landing);

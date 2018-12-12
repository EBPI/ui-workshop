import React from "react";
import FormComponent from "./FormComponent";

export default class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planet: "",
      allegiance: ""
    };
  }

  /**
   * Eventhandler is pulled up into a function.
   * Remove arrow notation and watch it fail
   */
  handlePlanetChange = evt => {
    this.setState({ planet: evt.target.value });
  };

  render() {
    return <FormComponent />;
  }
}

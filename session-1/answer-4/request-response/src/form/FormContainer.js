import React from "react";
import FormComponent from "./FormComponent";

const SAVE_PLANET_URL = "planets/";

export default class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: "",
      allegiance: "empire"
    };
  }

  /**
   * Event handler is pulled up into a function.
   * Remove arrow notation and watch it fail
   */
  handlePlanetChange = evt => {
    this.setState({ planet: evt.target.value });
  };

  handleAllegianceChange = evt => {
    this.setState({ allegiance: evt.target.value });
  };

  /**
   * cannot use async and phat arrow in one go :-(
   */
  async handleSaveButton(evt) {
    evt.preventDefault();
    console.log("handleSaveButton", this.state);
    try {
      // note that fetch will handle a non 200 (ok) response not as an exception
      const response = await fetch(SAVE_PLANET_URL, {
        method: "POST",
        body: JSON.stringify(this.state)
      });
      // do something with response, see F12 for a dump of the response object
      console.dir(response);
      alert(`${response.status}: ${response.statusText}`);
    } catch (error) {
      // error could be a network error
      alert(error);
    }
  }

  render() {
    return (
      <FormComponent
        planet={this.state.planet}
        allegiance={this.state.allegiance}
        handlePlanetChange={this.handlePlanetChange}
        handleAllegianceChange={this.handleAllegianceChange}
        handleSaveButton={this.handleSaveButton.bind(this)} // manually binding 'this' for the method
      />
    );
  }
}

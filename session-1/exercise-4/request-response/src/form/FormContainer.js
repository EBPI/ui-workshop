import React from "react";
import FormComponent from "./FormComponent";

// example URL to send planet data
const SAVE_PLANET_URL = "planets/";

/**
 * Container component holds state and does HTTP via fetch.
 * It only renders via a functional component that does not have state.
 */
export default class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      planet: "",
      allegiance: "empire"
    };
  }

  render() {
    return (
      <FormComponent
        planet={} // TODO pass from Container state to Component via props
        allegiance={} // TODO pass from Container state to Component via props
        handlePlanetChange={} // TODO pass callback method from Container to Component via props
        handleAllegianceChange={} // TODO pass callback method from Container to Component via props
        handleSaveButton={} // TODO pass callback method from Container to Component via props
      />
    );
  }
}

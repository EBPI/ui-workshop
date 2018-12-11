import React from "react";

import SelectComponent from "./SelectComponent";

export default class FormComponent extends React.Component {
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
    return (
      <section>
        <form>
          <label>
            Planet:{" "}
            <input
              type="text"
              value={this.state.planet}
              onChange={this.handlePlanetChange}
            />
          </label>

          <label>
            Allegiance:
            <SelectComponent
              handleSelect={evt => {
                // eventhandler is inlined in the attribute body
                this.setState({ allegiance: evt.target.value });
              }}
            />
          </label>
        </form>

        <div style={{ margin: "1em" }}>
          You chose <em>{this.state.planet || "unknown"}</em>, which has allegiance to
          the <em>{this.state.allegiance || "unknown"}</em>
        </div>
      </section>
    );
  }
}

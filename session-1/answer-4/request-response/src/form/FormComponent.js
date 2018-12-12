import React from "react";

/**
 * TODO use the props to bind and evoke parent handler
 */
const FormComponent = ({ formData, saveHandler }) => {
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
          <div className="input-field">
            <select onChange={handleSelect}>
              <option label="rebels">rebels</option>
              <option label="empire">empire</option>
            </select>
          </div>
        </label>
      </form>
    </section>
  );
};

export default FormComponent;

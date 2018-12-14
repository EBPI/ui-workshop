import React from "react";

/**
 * Functional presentational component, is like a template and just renders and nothing more.
 * props are used to pass in functions that will be bound to event handlers on the Component.
 */
const FormComponent = ({
  planet,
  allegiance,
  handlePlanetChange,
  handleAllegianceChange,
  handleSaveButton
}) => {
  return (
    <div className="row">
      <div className="col s3">{/*left third column has no content*/}</div>
      <form className="col s6 z-depth-1">
        <div className="row">
          <h2>Choose a planet</h2>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="planet name goes here"
              type="text"
              id="planet"
            />
            <label htmlFor="planet">Planet</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <select className="select-dropdown dropdown-trigger">
              <option label="rebels">rebels</option>
              <option label="empire">empire</option>
            </select>
            <label htmlFor="allegiance">Allegiance</label>
          </div>
        </div>
        <div className="input-field col">
          <div className="row">
            <button className="btn waves-effect waves-light">save</button>
          </div>
        </div>
      </form>
      <div className="col s3">{/*right third column has no content*/}</div>
    </div>
  );
};

export default FormComponent;

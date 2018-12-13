import React from "react";

/**
 * Functional presentational component, is like a template and just renders and nothing more
 * props are used to bind events to it's parents handler
 */
const FormComponent = ({
  planet,
  allegiance,
  handlePlanetChange,
  handleAllegianceChange,
  handleSaveButton
}) => {
  return (
    <section>
      <form>
        <div className="form-group">
          <label>
            Planet:
            <input type="text" value={planet} onChange={handlePlanetChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            <div className="input-field">
              Allegiance:
              <select onChange={handleAllegianceChange}>
                <option label="rebels">rebels</option>
                <option label="empire">empire</option>
              </select>
            </div>
          </label>
        </div>
        <div className="form-group">
          <button onClick={handleSaveButton}>save</button>
        </div>
      </form>
    </section>
  );
};

export default FormComponent;

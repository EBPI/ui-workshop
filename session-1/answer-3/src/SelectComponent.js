import React from "react";
import PropTypes from "prop-types";

const SelectComponent = ({ handleSelect }) => {
  return (
    <div className="input-field">
      <select onChange={handleSelect}>
        <option label="rebels">rebels</option>
        <option label="empire">empire</option>
      </select>
    </div>
  );
};

SelectComponent.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default SelectComponent;

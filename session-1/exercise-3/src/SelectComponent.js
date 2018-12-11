import React from "react";
import PropTypes from "prop-types";

const SelectComponent = ({ handleSelect }) => {
  return (
    <select onChange={handleSelect}>
      <option label="rebels">rebels</option>
      <option label="empire">empire</option>
    </select>
  );
};

SelectComponent.propTypes = {
  handleSelect: PropTypes.func.isRequired
};

export default SelectComponent;

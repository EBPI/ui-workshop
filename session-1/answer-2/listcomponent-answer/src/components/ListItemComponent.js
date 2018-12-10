/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";

const ListItemComponent = props =>
 <li>{props.item.name}</li>;

ListItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ListItemComponent;
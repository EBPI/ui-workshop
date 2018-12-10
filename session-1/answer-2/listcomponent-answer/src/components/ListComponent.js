/* eslint-disable require-jsdoc */
import React from "react";
import PropTypes from "prop-types";
import ListItemComponent from "./ListItemComponent"

const ListComponent = props =>
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.data.map(item => <ListItemComponent item={item} key={item.name}/>)}
      </ul>
    </div>;

ListComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListComponent;
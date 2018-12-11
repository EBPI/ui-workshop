/* eslint-disable require-jsdoc */
import React from "react";
import ListItemComponent from "./ListItemComponent"

const ListComponent = props =>
    <div>
      <h1>{props.title}</h1>
      <ul>
        {props.data.map(item => <ListItemComponent item={item} key={item.name}/>)}
      </ul>
    </div>;

export default ListComponent;
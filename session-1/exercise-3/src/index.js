import React from "react";
import ReactDOM from "react-dom";
import FormComponent from "./FormComponent";

import "./styles.css";

/**
 * Exercise 3, create a FormComponent with no props:
 * The form should have:
 * - one text field component called 'planet'
 * - one select (option list) component called 'allegiance' and two options 'rebel' and 'empire'
 *
 * When typing the name of a planet in the 'planet' field, the name should be immediately printed below the form
 * When selecting the 'allegiance' from the list, the value should be immediately printed below the form
 *
 * Hints:
 * - the FormComponent should have state, so it cannot be a functional component, it should be a Class extending React.Component
 * - use the 'this.state' class member of FormComponent to hold the two values you want to print
 * - when using an arrow function in a class, the 'this' context is always bound to the parent scope (the component class)
 *
 * Advanced level (if you have time left):
 * - refactor the select component into a child-component called 'SelectComponent',
 *   this has one prop 'handleSelect' of type 'func'.
 *   The function passed should be bound to the onChange attribute of the 'select'.
 *   The function passed should update the state of the parent component
 * - enforce the proper shape of the prop using the 'prop-types' package
 *
 */

function App() {
  return (
    <div className="App">
      <h1>What planet do you live on?</h1>
      <FormComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

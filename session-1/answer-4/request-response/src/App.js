import React, { Component } from "react";
import "./App.css";
import FormContainer from "./form/FormContainer";

/**
 * Exercise 4, finish the Form from exercise 3, so it will submit data to a server:
 * The form should:
 * - have a container component that handles state and does HTTP via the 'fetch' library
 * - handle errors in in any way you like, show an 'alert(errorMessage)' popup or
 * - have a button that will allow a user to send the data to the server
 *
 * Hints:
 *  TODO
 *
 * Advanced level (if you have time left):
 * - do not allow the user to submit if the two pieces of data are not entered
 *
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">I can see planets baby!</header>
        <article>
          <FormContainer />
        </article>
      </div>
    );
  }
}

export default App;

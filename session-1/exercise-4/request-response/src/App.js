import React, { Component } from "react";
import "./App.css";
import FormContainer from "./form/FormContainer";

/**
 * Exercise 4, finish the Form from exercise 3, so it will submit data to a server:
 * The form should:
 * - have a container component that handles state and does HTTP via the 'fetch' library
 * - you can choose between using the 'promise' or the 'async/await' syntax for using 'fetch'
 * - handle errors in in any way you like, show an 'alert(errorMessage)' popup or print to the HTML body
 * - have a button that will allow a user to send the data to the server
 * - the URL for sending the data is bogus for now, could be like '/planet'
 *
 * Hints:
 * - you can use a
 * - you cannot use async and phat arrow in one go, so you will have to manually bind the 'this' context
 *   for an async function.
 *
 * Advanced level (if you have time left):
 * - do not allow the user to submit if the two pieces of data are not entered
 */

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <nav>
            <div className="nav-wrapper">
              <a href="#logo" className="brand-logo">
                I can see planets baby!
              </a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className="active">
                  <a href="/planets">planets</a>
                </li>
                <li>
                  <a href="/allegiances">allegiances</a>
                </li>
                <li>
                  <a href="/about">about</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <article className="container">
          <FormContainer />
        </article>
      </div>
    );
  }
}

export default App;

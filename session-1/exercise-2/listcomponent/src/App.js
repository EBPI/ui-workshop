///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// The App component below calls an external api to display a list of Siths.
//
// Split it into three components:
// 1- App.js (existing)
// 2- ListComponent.js: new component representing a list of items
// 3- ListItemComponent.js: new component representing one list item.
//
// Create a folder "components" in the src folder to hold the new components.
//
// App.js should fetch the data and contain the state.
// ListComponent and ListItemComponent should be Functional Components (so they should not extend React.Component)
// see for example: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
//
// Got extra time?
// - make the list title flexible using a prop
// - In ListItemComponent, make item mandatory using PropTypes.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  /**
   * Get data from Star Wars Api
   * @param {string} urlPart - string after the base url
   */
  getStarWarsData = urlPart =>
    fetch("https://swapi.co/api" + urlPart)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );

  componentDidMount() {
    this.getStarWarsData("/people/?search=darth");
  }

  render() {
    // using es6 object destructuring, https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operatoren/Destructuring_assignment#Object_destructuring
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>A Sith Lord?</h1>
          <ul>
            {items.map(item => <li key={item.name}>{item.name}</li>)}
          </ul>
        </div>
      );
    }
  }
}

export default App;

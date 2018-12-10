
import React, {Component} from 'react';
import './App.css';
import ListComponent from './components/ListComponent';

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
    const {error, isLoaded, items} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <ListComponent data = {items} title = "A Sith Lord?"/>
    }
  }
}

export default App;

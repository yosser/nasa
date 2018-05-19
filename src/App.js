import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

import Search from "./Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.searching = false;
    this.onSearchChanged = this.onSearchChanged.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  doSearch() {
    console.log("Search clicked");
    this.searching = true;
    axios
      .get(
        `https://images.nasa.gov/search?media_type=image&q=${this.state.search}`
      )
      .then(response => {
        this.searching = false;
        console.log(response);

      }).catch(response => {
        alert(`Error ${response}`);
        this.searching = false;
      })
  }

  onSearchChanged(event) {
    console.log("Search with " + event.target.value);
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Search onDoSearch={this.onSearchChanged} />
        <button onClick={this.doSearch} disabled={this.state.search.length < 3  || this.searching}>
          Search
        </button>
      </div>
    );
  }
}

export default App;

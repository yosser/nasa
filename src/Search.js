import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { search: "" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
      console.log("Got "+ event.target.value);
    this.setState({search: event.target.value});
    this.props.onDoSearch(event);
  }
  render() {
    return (
      <div className="Search">
        <label htmlFor="SearchInput">Search: </label>
        <input type='text' name="SearchInput" id="SearchInput" onChange={this.handleChange} value={this.state.search} />
      </div>
    );
  }
}

export default Search;

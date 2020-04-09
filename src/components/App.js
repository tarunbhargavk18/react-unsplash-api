import React, { Component } from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

export default class App extends Component {
  state = { results: [] };

  getSubmitted = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ results: response.data.results });
  };

  render() {
    return (
      <div className="container">
        <SearchBar submitted={this.getSubmitted} />
        <ImageList result={this.state.results} />
      </div>
    );
  }
}

import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from "axios";
import ImageList from "./ImageList";

export default class App extends Component {
  state = { results: [] };

  getSubmitted = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID Jsku3jSWuOXN7xxCJvTi4wIO_DJ5bQAfmpaQzrPcDLg",
      },
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

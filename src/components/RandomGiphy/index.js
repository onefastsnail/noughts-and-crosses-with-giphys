import React from "react";
import Image from "../Image";

export default class RandomGiphy extends React.Component {
  constructor(props) {
    super(props);

    this.apiKey = "seYUer2bPoJZHvH7soSy12u5ynQXIYbT"; // Please dont abuse :(

    this.state = {
      loading: false,
      giphy: null,
      category: this.props.category || "random",
      tag: this.props.tag || "developer"
    };

    this.fetchGiphy = this.fetchGiphy.bind(this);
    this.getGiphyUrl = this.getGiphyUrl.bind(this);
  }

  componentDidMount() {
    this.fetchGiphy();
  }

  getGiphyUrl() {
    return `https://api.giphy.com/v1/gifs/${this.state.category}?api_key=${
      this.apiKey
    }&rating=G&tag=${this.state.tag}`;
  }

  fetchGiphy() {
    this.setState({ loading: true });
    fetch(this.getGiphyUrl())
      .then(response => response.json())
      .then(json => {
        this.setState(() => {
          return {
            giphy: json.data,
            loading: false
          };
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.giphy && (
          <Image
            url={this.state.giphy.image_url}
            title={this.state.giphy.title}
            render={({ url }) => {
              return (
                <div
                  className="c-piece__image"
                  style={{ backgroundImage: `url(${url})` }}
                />
              );
            }}
          />
        )}
      </React.Fragment>
    );
  }
}

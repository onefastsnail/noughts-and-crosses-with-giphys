import React from "react";
import Loading from "../Loading";

export default class extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      url: null
    };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
    this.fetchImage = this.fetchImage.bind(this);
    this.renderFromProps = this.renderFromProps.bind(this);
  }

  componentDidMount() {
    this.fetchImage(this.props.url);
  }

  fetchImage(url) {
    this.setState({ loading: true });
    const img = new Image();
    img.onload = () => {
      this.handleImageLoaded(url);
    };
    img.src = url;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) this.fetchImage(this.props.url);
  }

  handleImageLoaded(url) {
    this.setState({ loading: false, url });
  }

  renderFromProps() {
    return this.props.render({ url: this.state.url, title: this.props.title });
  }

  renderDefault() {
    return <img src={this.state.url} alt={this.props.title} />;
  }

  render() {
    return (
      <div className="c-image">
        {this.state.loading && <Loading />}
        {(this.props.render && this.renderFromProps()) || this.renderDefault()}
      </div>
    );
  }
}

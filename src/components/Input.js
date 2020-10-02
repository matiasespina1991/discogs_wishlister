import React, { Component } from "react";
import axios from "axios";
import "../App.css";


class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputLink: [],
    };
  }

  handleSubmit = (link) => {
    const releaseID = this.parseLinkToGetId(this.state.inputLink);
    this.fetchRelease(releaseID);
    link.preventDefault();
  };

  handleChange = (event) => {
    this.setState({ inputLink: event.target.value });
  };

  parseLinkToGetId = (link) => {
    const splittedLink = link.split("/");
    return splittedLink[splittedLink.length - 1];
  };

  fetchRelease(releaseId) {
    let that = this;
    axios
      .get(`https://api.discogs.com/releases/${releaseId}`, {
        headers: {
          Authorization:
            "Discogs key=lFemHxcbdOzQulBBGTFs, secret=LUSJxqEkGYAdRwoDhvgQurEzADaYvgOx",
        },
      })
      .then((res) => {
        let card = {
          id: res.data.id,
          name: `${res.data.artists[0].name} ${res.data.title}`,
          imgURL: res.data.thumb,
          year: res.data.year,
          format: res.data.formats[0].name,
          userPrice: "",
        };
        that.props.handleObjectSubmit(card);
      });
  }

  render() {
    return (
      <div className="input-global-container">
        <form
          className="input-container"
          onSubmit={this.handleSubmit}
          action=""
        >
          <label>Add a release to your Wishlist</label>
          <input
            className="input"
            type="text"
            id="inputLink"
            name="inputLink"
            value={this.state.inputLink}
            onChange={this.handleChange}
            placeholder="https://www.discogs.com/release/6261872"
          />
        </form>
      </div>
    );
  }

}

export default Input;

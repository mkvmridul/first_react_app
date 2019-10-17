import React, { Component } from "react";
import propTypes from "prop-types";

class Search extends Component {
  state = {
    search: ""
  };
  static propTypes = {
    searchUsers: propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    isUsers: propTypes.bool.isRequired
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    const { isUsers, clearUsers } = this.props;
    return (
      <center>
        <form
          className=" col-sm-12 container mb-5 mt-2"
          onSubmit={this.onSubmit}
        >
          <input
            type="text"
            className="form-control  d-inline col-sm-5"
            id="search"
            name="search"
            aria-describedby="search"
            placeholder="Search User"
            value={this.state.text}
            onChange={this.onChange}
            required
          />
          <button
            type="submit"
            className="btn btn-secondary col-sm-2 ml-1 d-inline"
          >
            Search
          </button>
          {isUsers ? (
            <button
              type="button"
              className="btn btn-dark col-sm-2 ml-1 d-inline"
              onClick={clearUsers}
            >
              clear
            </button>
          ) : (
            ""
          )}
        </form>
      </center>
    );
  }
}

export default Search;

import React, { Component } from "react";
import Repos from "../repos/Repos";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.singleUser(this.props.match.params.login);
    this.props.userRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: propTypes.bool.isRequired,
    user: propTypes.object.isRequired,
    singleUser: propTypes.func.isRequired,
    userRepos: propTypes.func.isRequired
  };

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists
    } = this.props.user;
    // console.log(this.props.user);
    return (
      <div className="container" style={{ marginTop: "20px" }}>
        <Link to="/" className="btn btn-outline-secondary">
          <i className="fab fa-arrow"></i> Back
        </Link>
        &nbsp;&nbsp;
        <code>{name}</code>
        <div
          className="row col-sm-12 border"
          style={{ marginTop: "2vh", padding: "20px" }}
        >
          <center className="col-sm-6">
            <div>
              <img
                src={avatar_url}
                alt="user image"
                style={{ width: "50%", borderRadius: "50%" }}
                className="col-sm-12"
              />
              <br />
              <br />
              <center>
                <b className="label col-sm-12">{name}</b>
              </center>
            </div>
          </center>
          <div className="col-sm-6" style={{ display: "block" }}>
            <b>BIO:</b>
            <br />
            {bio}
            <code>{bio}</code>
            <br />
            <br />
            <a href={html_url} className="btn btn-outline-danger">
              Visit GitHub Profile
            </a>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <Repos repos={this.props.repos} />
      </div>
    );
  }
}

export default User;

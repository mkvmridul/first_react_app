import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import Search from "./components/layouts/Search";
import About from "./components/pages/About";
import User from "./components/users/User";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    isUsers: false
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data, isUsers: true });
  }

  searchUsers = async search => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items, isUsers: true });
  };

  singleUser = async userName => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, user: res.data });
  };
  userRepos = async userName => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ loading: false, repos: res.data });
  };

  clearUsers = () => {
    this.setState({ loading: false, users: [] });
  };
  render() {
    const { loading, users, user, repos, isUsers } = this.state;
    // console.log(repos);

    return (
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    isUsers={isUsers}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={props => (
                <User
                  {...props}
                  singleUser={this.singleUser}
                  userRepos={this.userRepos}
                  user={user}
                  repos={repos}
                  loading={loading}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

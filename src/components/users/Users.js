import React from "react";
import UserItem from "./UserItem";
import Loader from "../layouts/Loader";
import propTypes from "prop-types";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="container">
        <div className="row col-sm-12">
          {users.map(el => (
            <UserItem key={el.id} item={el} />
          ))}
        </div>
      </div>
    );
  }
};

Users.propTypes = {
  users: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired
};

export default Users;

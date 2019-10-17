import React from "react";
import { Link } from "react-router-dom";

const UserItem = props => {
  const { login, avatar_url, html_url } = props.item;
  return (
    <div className="card col-sm-3 ">
      <img src={avatar_url} className="card-img-top" alt="..." />
      <center>
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <Link to={`/user/${login}`} className="btn btn-primary">
            More
          </Link>
        </div>
      </center>
    </div>
  );
};

export default UserItem;

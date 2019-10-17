import React, { Fragment } from "react";
import loader from "./loader.gif";

const Loader = () => {
  return (
    <Fragment>
      <img
        src={loader}
        alt="...loading"
        style={{ width: "50px", display: "block" }}
        className="mx-auto"
      />
    </Fragment>
  );
};

export default Loader;

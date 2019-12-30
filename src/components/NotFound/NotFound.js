import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Header from "../Header";

class NotFound extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <center>
          <Link to="/">Return to Home Page</Link>
        </center>
        <img
          alt="Page Not Found"
          src="/images/404.gif"
          style={{
            width: 800,
            height: 800,
            display: "block",
            margin: "auto",
            position: "relative"
          }}
        />
      </>
    );
  }
}

export default NotFound;

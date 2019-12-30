import React from "react";
import { Link } from "react-router-dom";

class Header extends React.PureComponent {
  render() {
    return (
      <div className="list-books-title">
        <h1>
          <Link to="/" className="header-link">
            MyReads
          </Link>
        </h1>
      </div>
    );
  }
}
export default Header;

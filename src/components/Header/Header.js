import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
class Header extends React.PureComponent {
  render() {
    return (
      <S.ListBooksTitle>
        <h1>
          <Link to="/">MyReads</Link>
        </h1>
      </S.ListBooksTitle>
    );
  }
}

const S = {};
S.ListBooksTitle = styled.div`
  padding: 10px 0;
  background: #2e7c31;
  text-align: center;
  & > h1 {
    font-weight: 400;
    margin: 0;
    color: white;
    & > a {
      text-decoration: none;
      font-weight: 400;
      margin: 0;
      color: white;
    }
  }
`;

export default Header;

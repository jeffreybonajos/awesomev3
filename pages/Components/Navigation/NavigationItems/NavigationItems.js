import React from "react";
import Button from "../../UI/Button/Button";
import Link from "next/link";
import styled from "styled-components";

const StyleUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;
const StyledLI = styled.li`
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;
  @media (min-width: 500px) {
      margin: 0;
      display: flex;
      height: 100%;
      width: auto;
      align-items: center;`;

const StyledA = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  width: 100%;
  box-sizing: border-box;
  display: block;

  :hover,
  :active,
  :active {
    color: #fedebe;
  }

  color: black;
  height: 100%;
  padding: 16px 10px;
  border-bottom: 4px solid transparent;

  :hover,
  :active,
  :active {
    border-bottom: 4px solid orange;
  }
`;

const navigationItems = props => (
  <header>
    <StyleUL>
      <StyledLI>
        <Link href="/profile">
          <StyledA>Profile</StyledA>
        </Link>
      </StyledLI>
      <StyledLI>
        <Link href="/logout">
          <StyledA>Logout</StyledA>
        </Link>
      </StyledLI>
      <Button>Time Out</Button>
    </StyleUL>
  </header>
);

export default navigationItems;

import React from "react";
import styled from "styled-components";
import Link from "next/link";
const StyledDiv = styled.div`
  padding-top: 15px;
`;
const StyledLogo = styled.a`
  cursor: pointer;
  font-size: 20px;

  -webkit-transition-duration: 1s;
  transition-duration: 1s;
  -webkit-transition-timing-function: ease-in-put;
  transition-timing-function: ease-in-put;
  font-weight: 200;
  font-family: sans-serif;
  color: #ff6123;
`;
const logo = props => (
  <StyledDiv>
    <Link href="/homepage">
      <StyledLogo>Awesome OS</StyledLogo>
    </Link>
  </StyledDiv>
);
export default logo;

import React from "react";
import UserInfo from "./UserInfo/UserInfo";
import styled from "styled-components";

const StyledNavMenu = styled.div`
  text-align: center;
  width: 80%;
  background-color: white;
`;
const StyledSideNav = styled.div`
  width: 25%;
  position: fixed;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  top: 100px;
  height: 100%;
  z-index: 90;
`;
const sidedrawer = props => (
  <StyledSideNav>
    <UserInfo full_name={props.full_name} position={props.position} />
    <StyledNavMenu>
      <span>Home</span>
      <br />
      <span>Personal</span>
      <br />
      <span>Handbook</span>
      <br />
      <span>Feedback</span>
    </StyledNavMenu>
  </StyledSideNav>
);
export default sidedrawer;

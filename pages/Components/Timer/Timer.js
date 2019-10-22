import React, { Component } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 15px;
`;
class DateTime extends Component {
  state = {
    date: new Date()
  };
  DateUpdate() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  render() {
    return (
      <StyledDiv>
        <span>{this.state.date.toLocaleTimeString()}</span>
        {this.DateUpdate()}
      </StyledDiv>
    );
  }
}
export default DateTime;

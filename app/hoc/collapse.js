import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.button`
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  border: none;
  width: 100%;
  text-align: left;
  outline: none;
  font-size: 15px;
  display: flex;
  font-size: 1em;
  > span {
    font-size: 1.4em;
    font-weight: 900;
    color: #fff;
    /* padding: 0.3em; */
    margin-right: 1em;
  }
`;
const ContentData = styled.div`
  padding: 0 18px;
  max-height: fit-content;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
`;

class Collapse extends Component {
  state = {
    show: false,
  };

  clickHandler = () => {
    // console.log("in this");
    const content = this.state.height;
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  render() {
    return (
      <Wrapper>
        <Container onClick={this.clickHandler}>
          <span>{this.state.show ? "-" : "+"}</span>
          {this.props.header}
        </Container>
        <ContentData style={{ height: this.state.show ? "auto" : "0em" }}>
          {this.props.children}
        </ContentData>
      </Wrapper>
    );
  }
}

export default Collapse;

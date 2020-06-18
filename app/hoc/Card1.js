import React, { Component } from "react";
import styled from "styled-components";
import { Logo_Name } from "../constants/utils";
import Link from "next/link";

const Wrapper = styled.div`
  background: #fff;
`;

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;
const Count = styled.div`
  background: #83c11f;
  font-size: 6em;
  color: #fff;
`;
const Process = styled.div`
  padding: 1em;
  color: #a8b7c3;
`;
const Title = styled.div`
  color: #33333e;
  font-size: 1.7em;
  background: #f7f7f7;
`;

class Logo extends Component {
  state = {};
  render() {
    console.log("props", this.props);
    const { title, process, num } = this.props;
    return (
      <Wrapper>
        <Title>{title}</Title>
        <BoxWrapper>
          <Count>{num}</Count>
          <Process>{process}</Process>
        </BoxWrapper>
      </Wrapper>
    );
  }
}

export default Logo;

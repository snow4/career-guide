import React, { Component } from "react";
import styled from "styled-components";
import { Logo_Name } from "../constants/utils";
import Link from "next/link";

const Wrapper = styled.div``;
const Container = styled.div`
  > h1 {
    color: #AB1D18;
    font-size: 2.6vw;
    /* font: 900 68px/74px Metric;
    display: block;
    letter-spacing: -1px; */
  }
  cursor: pointer;
`;

class Logo extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Link
          href={{
            pathname: "/"
          }}
        >
          <Container>
            <h1>{Logo_Name}</h1>
          </Container>
        </Link>
      </Wrapper>
    );
  }
}

export default Logo;

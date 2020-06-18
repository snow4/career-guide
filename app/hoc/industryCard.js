import React, { Component } from "react";
import styled from "styled-components";
import { screen } from "../constants/utils";
import Link from "next/link";

const Wrapper = styled.div``;
const Container = styled.div`
  background: #fff;
  display: grid;
  grid-template-columns: 1.7fr 1.5fr;

  box-shadow: 0 8px 10px 0 rgba(0, 0, 0, 0.2);

  align-content: center;

  cursor: pointer;
  @media only screen and (max-width: ${screen.width3}) {
    padding: 1em;
  }
  &:hover {
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
  }
`;
const TextContainer = styled.div`
  padding: 0.5em;
  font-size: 1em;
  font-weight: 400;
`;
const ImageContainer = styled.div`
  > img {
    width: 100%;
  }
`;

class IndustryCard extends Component {
  state = {};
  render() {
    console.log("industry props", this.props);
    return (
      <Wrapper>
        <Link
          href={{
            pathname: "occupations",
            query: { industry: this.props.data },
          }}
        >
          <Container>
            <TextContainer>{this.props.data}</TextContainer>
            <ImageContainer>
              <img
                src="https://images.unsplash.com/photo-1539680964273-ae13f8a44e22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="img not available"
              />
            </ImageContainer>
          </Container>
        </Link>
      </Wrapper>
    );
  }
}

export default IndustryCard;

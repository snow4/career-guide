import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div``;
const Container = styled.div`
  width: 15vw;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
    text-align: center;
    padding-bottom: 12px;
  background: white;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  > img {
    width: 100%;
  }
`;
const DetailsContainer = styled.div`
  padding: 2em 1em 2em 1em;
`;

class CareerCard extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Link
          href={{
            pathname: "occupation",
            query: { profile: "auditor" }
          }}
        >
          <Container>
            <ImageContainer>
              <img
                src="https://images.unsplash.com/photo-1539680964273-ae13f8a44e22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="img not available"
              />
            </ImageContainer>
            <DetailsContainer>Diagonastic medical sonographer</DetailsContainer>
          </Container>
        </Link>
      </Wrapper>
    );
  }
}

export default CareerCard;

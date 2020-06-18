import React, { Component } from "react";
import HomePage from "../app/components/HomePage/index";
import styled from "styled-components";
import CareerCard from "../app/hoc/careerCard";
import { Industrys, screen } from "../app/constants/utils";

const Wrapper = styled.div``;
const Container = styled.div`
  margin: 1em 2em 0 2em;
`;
const AboutContainer = styled.div``;
const CategoriesContainer = styled.div`
  > div {
    background: #00091a;
    height: 15vw;
  }
  color: #fff;
`;
const AllOptionsContainer = styled.div`
  margin: 1em 2em 0 2em;
  background: #f2f2f2;
  padding: 1em 2em 0 2em;
  > div {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    grid-gap: 2em;
    @media only screen and (max-width: ${screen.width3}) {
      grid-template-columns: unset;
    }
  }
  @media only screen and (max-width: ${screen.width3}) {
    margin: unset;
  }
`;

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <AboutContainer>
            <h2>Brief Description 💅</h2>
          </AboutContainer>
          <CategoriesContainer>
            <div>
              <h2>Personalized Cateories</h2>
            </div>
          </CategoriesContainer>
          <AllOptionsContainer>
            <h2>Top Options</h2>
            <div>
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
              <CareerCard />
            </div>
          </AllOptionsContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default LandingPage;

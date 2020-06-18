import React, { Component } from "react";
import styled from "styled-components";
import { Industrys, screen } from "../../constants/utils";
import Card from "../../hoc/industryCard";
import { Procedure } from "../../constants/Data_constants";
import Card1 from "../../hoc/Card1";

const Wrapper = styled.div``;
const Container = styled.div`
  /* background: #e9dccf; */
  /* background: #a19f89; */
  padding: 1em;
`;
const FirstContainer = styled.div`
  padding: 2em 4em 2em 4em;

  color: #000;

  margin: 0 0 2em 0;
  @media only screen and (max-width: ${screen.width3}) {
    padding: unset;
  }
  > div {
    display: grid;
    grid-template-columns: 3fr 2fr;
    font-size: 18px;
    font-family: Gotham-Book;
    color: #000;
    margin-top: 20px;
    line-height: 36px;
    color: #333 !important;
    @media only screen and (max-width: ${screen.width3}) {
      display: unset;
    }
  }
  > h2 {
    color: #a8943d;
    font-size: 3em !important;
    margin-bottom: 1em !important;
    line-height: 36px !important;
    font-family: "Publico-Extrabold" !important;
  }
`;
const SecondContainer = styled.div`
  padding: 2em 4em 2em 4em;
  /* background: #a19f89; */
  margin: 2em 0.5em 2em 0.5em;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 2em;
`;
const ThirdContainer = styled.div`
  /* padding: 0 9em 0 9em; */
  background: #f4f4f4;
  @media only screen and (max-width: ${screen.width3}) {
    padding: unset;
  }
`;
const IndustryContainer = styled.div`
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
  padding: 2em 4em 2em 4em;

  > div {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 2em;
    grid-row-gap: 1.5em;
    padding: 0 9em 0 9em;
    @media only screen and (max-width: ${screen.width3}) {
      display: grid;
      grid-template-columns: unset;
      grid-gap: 0.9em;
      padding: unset;
    }
  }
  @media only screen and (max-width: ${screen.width3}) {
    padding: 0.2em 0.5em 0 0.5em;
  }
`;

class HomePage extends Component {
  state = {};
  render() {
    const cards = Industrys.map(d => {
      console.log("d", d);
      return <Card data={d} />;
    });

    const Steps = Procedure.map((d, i) => {
      return <Card1 {...d} num={i} />;
    });

    return (
      <Wrapper>
        <Container>
          <FirstContainer>
            <h2>Grow your career with Us</h2>
            <div>
              Find the right courses for your perfect career! Alison's Career
              Guide is your one-stop source to explore and discover the world's
              careers, and to access free courses within your chosen field. In
              Alison's Career Guide, you can learn more about jobs that people
              do every day, and search for your perfect career by Industry,
              Career Path or Occupation. For each Occupation, you will find all
              related Alison Certificate and Diploma courses that will help you
              gain the skills and qualifications you need to succeed.
              <img
                src="../../assets/images/career.jpg"
                alt="img not available"
              />
            </div>
          </FirstContainer>
          <SecondContainer>
            {Steps}
            {/* Choose Industry => choose occupation => discover courses */}
          </SecondContainer>
          <ThirdContainer>
            <IndustryContainer>
              <h1>Choose your Industry</h1>
              <div>{cards}</div>
            </IndustryContainer>
          </ThirdContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default HomePage;

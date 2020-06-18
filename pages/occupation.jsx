import React, { Component } from "react";
import HomePage from "../app/components/HomePage/index";
// import { Collapse } from "antd";
import Collapse from "../app/hoc/collapse";
import StarRatings from "react-star-ratings";

import styled from "styled-components";
import Link from "next/link";
const { Panel } = Collapse;

const Wrapper = styled.div``;
const Container = styled.div`
  padding: 0 0.5em 1em 1em;
`;

const AboutContainer = styled.div`
  background: #fff;
  /* padding: 1em 0.5em 1em 1em; */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
const AboutTitle = styled.div`
  font-size: 1.8em;
  font-weight: 600;
  padding: 0.4em 0.5em 1em 0.5em;
`;
const About = styled.div`
  padding: 0 0.5em 1em 0.5em;
`;
const ThirdContainer = styled.div``;
const Title = styled.div`
  font-size: 2em;
  font-weight: 600;
`;
const FifthContainer = styled.div``;
const SixthContainer = styled.div`
  display: grid;
  grid-gap: 0.1em;
`;
const RatingContainer = styled.div``;
const EightContainer = styled.div``;
const NinethContainer = styled.div``;
const TenthContainer = styled.div``;
const EleventhContainer = styled.div``;

const MergeContainer = styled.div`
  background: #23395d;
  > div {
    background: #192841;
    margin: 0.8em;
    color: #fff;
  }
`;
const InnerWrapper = styled.div`
  padding: 0 1em 0 1em;
`;
const CoumnMergeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

class LandingPage extends Component {
  state = {};
  render() {
    return (
      <Wrapper>
        <Container>
          <CoumnMergeContainer>
            <MergeContainer>
              <div>
                <Title>Become an Auditor</Title>

                <TenthContainer>Salary Range : 2 Lpa - 12Lpa</TenthContainer>

                <FifthContainer>Degrees Bcom</FifthContainer>
                <EleventhContainer>Growth Rate</EleventhContainer>
                <RatingContainer>
                  Rating
                  <StarRatings
                    rating={3}
                    starRatedColor="#83c11f"
                    starDimension="2em"
                    starSpacing="0.2em"
                    numberOfStars={5}
                    name="rating"
                  />
                </RatingContainer>
              </div>
            </MergeContainer>
            <InnerWrapper>
              <AboutContainer>
                <AboutTitle>About Auditor</AboutTitle>
                <About>
                  Client-side rendering is when the HTML document along with a
                  JS ... The initial page load will be slow and since the
                  network speed isn't ... Step 3: React app boots, requests data
                  from the back-end ... But the silver lining to the
                  complexities caused by SSR is that, they can be rectified with
                  tools like Next.js.
                </About>
              </AboutContainer>
              <SixthContainer>
                <Collapse header="Govt Institutes offering course">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat.
                </Collapse>

                <Collapse header="Degree Admission Entrance Exam">
                  Lorem ipsum dolor sit amet, consectetur
                </Collapse>
                <Collapse header="Scope in Govt Sector">
                  Lorem ipsum dolor sit amet, consectetur
                </Collapse>
                <Collapse header="Exams for Job">
                  Lorem ipsum dolor sit amet, consectetur
                </Collapse>
                <Collapse header="Scope in Private Sector">
                  Lorem ipsum dolor sit amet, consectetur
                </Collapse>
                <Collapse header="Online Courses available">
                  Lorem ipsum dolor sit amet, consectetur
                </Collapse>
              </SixthContainer>
              <NinethContainer>Reviews</NinethContainer>
            </InnerWrapper>
          </CoumnMergeContainer>
        </Container>
      </Wrapper>
    );
  }
}

export default LandingPage;

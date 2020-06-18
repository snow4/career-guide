import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../hoc/logo";
const Wrapper = styled.div`
  padding: 0 1em 0 1em;
  background: #1d1f21;
`;
const Container = styled.div`
  color: #fff;
  padding: 2em 0 2em 0;
`;
import { PageWrapper } from "../../hoc/pageWrapper";

const TopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  > div {
    text-align: -webkit-right;
  }
`;
const BottomContainer = styled.div``;

class Footer extends Component {
  state = {};
  render() {
    return (
      <PageWrapper>
        <Wrapper>
          <Container>
            <TopContainer>
              <Logo />
            </TopContainer>
            <BottomContainer>&copy; {new Date().getFullYear()}</BottomContainer>
          </Container>
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Footer;

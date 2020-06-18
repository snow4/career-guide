import React, { Component } from "react";
import styled from "styled-components";
import Logo from "../../hoc/logo";
import { PageWrapper } from "../../hoc/pageWrapper";
import { MenuOptions } from "../../constants/utils";
import { screen } from "../../constants/utils";
import Link from "next/link";

const Wrapper = styled.div`
  padding: 1em 3em 0 3em;
  font-size: 19px;
  font-family: Gotham-Light, sans-serif;
  color: #5c5c5c;
  background: #f7f7f7;

  @media only screen and (max-width: ${screen.width3}) {
    padding: unset;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: ${screen.width3}) {
    flex-direction: column;
  }
  /* align-items: center; */
  > ul {
    display: flex;
    padding-top: 0.5em;
    > li {
      margin-right: 1em;
      list-style-type: none;
      > a {
        text-decoration: none;
        color: unset;
      }
    }
  }

  /* color: #fff; */
  padding: 0.1em 0 0.1em 0;
  /* border-bottom: 1px solid #a19f89; */
`;

class Header extends Component {
  state = {};
  render() {
    const menu = MenuOptions.map((m, i) => {
      return (
        <li key={i.toString()}>
          <Link
            href={{
              pathname: m.toLowerCase(),
              query: { keyword: m }
            }}
          >
            {m}
          </Link>
        </li>
      );
    });
    return (
      <PageWrapper>
        <Wrapper>
          <Container>
            <Logo />
            <ul>{menu}</ul>
          </Container>
        </Wrapper>
      </PageWrapper>
    );
  }
}

export default Header;

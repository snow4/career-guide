import Link from "next/link";
import Head from "next/head";
import { PageWrapper } from "../../hoc/pageWrapper";
import Header from "../Header/index";
import Footer from "../Footer/index";
import { Logo_Name } from "../../constants/utils";
import styled from "styled-components";

const Wrapper = styled.div``;
const Container = styled.div`
  background: #f7f7f7;

  /* background: #a19f89; */
`;

export default ({ children, title }) => (
  <PageWrapper>
    <Head>
      <title>{Logo_Name}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
      ></link>
    </Head>
    <header>
      <Header />
    </header>
    <Wrapper>
      <Container> {children}</Container>
    </Wrapper>

    <footer>
      <Footer />
    </footer>
    <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
      }
    `}</style>
  </PageWrapper>
);

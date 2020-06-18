import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import withRedux, { createWrapper } from "next-redux-wrapper";
import Store from "../app/redux/store";
import Layout from "../app/components/Layout/index";
// import "../app/assets/styles.css";
// import "../app/assets"

const store = Store();
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);

import React, { Component } from "react";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { connect } from "react-redux";
import { getItems } from "../Actions/ItemsAction";

function Home(props) {
  // const people = [
  //   { name: "persi" },
  //   { name: "prashant" },
  //   { name: "tongra" },
  //   { name: "ram" },
  // ];
  // static getInitialProps({ store }) {
  //   store.dispatch(getItems());
  //   return { initialState: store.getState() };

  // }

  // constructor(props) {
  //   super(props);
  // }
  console.log(props);
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello,this is Prashant</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  counter: state,
});

export default connect(mapStateToProps, null)(Home);

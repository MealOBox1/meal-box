import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function firstpost() {
  return (
    <Layout>
      <Head>
        <title>first post</title>
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}

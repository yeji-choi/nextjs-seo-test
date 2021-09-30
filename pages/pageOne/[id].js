import React, { useEffect } from "react";
import Head from "next/head";
import SEO from "../../components/SEO";
import Link from "next/link";
import { useRouter } from "next/router";

// const PageOne = ({ title }) => {
const Pages = ({ title, desc }) => {
  const router = useRouter();
  console.log("router.query.id :: ", router.query.id);

  return (
    <div>
      <SEO url={`https://share-url-test.web.app/${router.query.id}`} title={title} desc={desc} />
      <div>This Page {router.query.id}.</div>
      <Link href="/">Home</Link>
    </div>
    // </DocumentMeta>
  );
};
Pages.getInitialProps = ({ query }) => {
  return { title: query.title, desc: query.id };
};
export default Pages;

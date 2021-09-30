import React, { useEffect } from "react";
import Head from "next/head";
import SEO from "../../components/SEO";
import Link from "next/link";

// const PageOne = ({ title }) => {
const PageOne = () => {
  return (
    <div>
      <SEO url="https://share-url-test.web.app/pageOne" title="페이지입니다." desc="테스트중" />
      <div>This Page 1.</div>
      <Link href="/">Home</Link>
    </div>
    // </DocumentMeta>
  );
};
// PageOne.getInitialProps = () => {
//   return { title: "seo title" };
// };
export default PageOne;

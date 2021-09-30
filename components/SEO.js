import React from "react";
// import { Helmet } from "react-helmet";
import Head from "next/head";

const SEO = ({ url, title, desc }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/images/c.jpeg" />
    </Head>
    // <Helmet>
    //   <title>{title}</title>
    //   <meta property="og:url" content={url} />
    //   <meta property="og:title" content={title} />
    //   <meta property="og:description" content={desc} />
    //   <meta property="og:image" content="https://source.unsplash.com/random/200x125" />
    // </Helmet>
  );
};

export default SEO;

// import React from "react";
// import { Helmet } from "react-helmet";

// const SEO = ({ url, title, desc }) => {
//   return (
//     <Helmet
//       meta={[
//         { property: "og:url", content: url },
//         { property: "og:title", content: title },
//         { property: "og:description", content: desc },
//         { property: "og:image", content: "https://source.unsplash.com/random/200x125" },

//         { name: "twitter:card", content: "summary" },
//       ]}
//       defer={false}
//     >
//       <title>{title}</title>
//     </Helmet>
//   );
// };

// export default SEO;

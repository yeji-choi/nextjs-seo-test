/* eslint-disable react/react-in-jsx-scope */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    // if (typeof window !== "undefined") {
    //   // 코드 작성
    //   const IMP = window.IMP; // 생략가능
    //   IMP.init("iamport"); // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용
    // }
    return (
      <Html>
        <Head />
        {/* <Head>
          <meta property="og:url" content="https://share-url-test.web.app/" data-react-helmet="true" />
          <meta property="og:title" content="인공지능 마켓 아이소 (AISO)" data-react-helmet="true" />
          <meta property="og:description" content="다양한 인공지능 앱을 사용해보새요." data-react-helmet="true" />
          <meta property="og:image" content="/images/aiso_logo.png" data-react-helmet="true" />
        </Head> */}
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
          <script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;

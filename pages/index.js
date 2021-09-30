import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta property="og:url" content="https://share-url-test.web.app" />
        <meta property="og:title" content="홈페이지" />
        <meta property="og:description" content="홈페이지입니다." />
        <meta property="og:image" content="https://source.unsplash.com/random/200x125" />
      </Head>
      {/* <Meta title="Home" desc="Home description" canonical="https://share-url-test.web.app/" /> */}
      <Link href="/pageOne">Page1</Link>
      <Link href={{ pathname: "/pageOne/[id]", query: { id: "2", title: "두번째 페이지 입니다." } }}>Page2</Link>
      <Link href={{ pathname: "/pageOne/[id]", query: { id: "3", title: "세번째 페이지 입니다." } }}>Page3</Link>
      <Link href={{ pathname: "/pageOne/[id]", query: { id: "4", title: "네번째 페이지 입니다." } }}>Page4</Link>
      <Link href={{ pathname: "/ssrPage", query: { id: "100", title: "SSR 테스트 중입니다." } }}>SSR PAGE</Link>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className={styles.logo}>{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}</span>
        </a>
      </footer>
    </div>
  );
};
export default Home;

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Home</title>
//         <meta property="og:url" content="https://share-url-test.web.app" />
//         <meta property="og:title" content="홈페이지" />
//         <meta property="og:description" content="홈페이지입니다." />
//         <meta property="og:image" content="https://source.unsplash.com/random/200x125" />
//       </Head>
//       {/* <Meta title="Home" desc="Home description" canonical="https://share-url-test.web.app/" /> */}
//       <Link href="/pageOne">Page1</Link>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by <span className={styles.logo}>{/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}</span>
//         </a>
//       </footer>
//     </div>
//   );
// }

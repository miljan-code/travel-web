import Head from 'next/head';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Jadoo &mdash; Travel Agency</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700;800&family=Volkhov:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;

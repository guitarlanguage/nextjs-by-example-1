import NavBar from "../components/NavBar";
import Head from "next/head";
import '../styles/globals.css';

function App({ Component, pageProps }) {
  console.log('[App] rendered')
  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />

    </>
    
  );
}

export default App;
import { Toaster } from "react-hot-toast";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>customer management</title>
      <meta>
      name="description"
      content="customer management application"
      </meta>
    </Head>
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
    </>
  );
}

export default MyApp;

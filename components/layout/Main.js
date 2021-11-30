import Head from "next/head";

import Navbar from "../Navbar";
import Footer from "../Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Vinz's homepage" />
        <meta name="author" content="Vinz Mendoza" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Homepage - Vinz Mendoza</title>
      </Head>
      <Navbar />
      <main className="max-w-2xl mx-auto">{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;

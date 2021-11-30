import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Main";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
  },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 20,
  },
};

const Page = ({ children, title }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, type: "easeInOut" }}
    >
      {title && (
        <Head>
          <title>{title} - Vinz Mendoza</title>
        </Head>
      )}
      {children}
    </motion.div>
  );
};

export default Page;

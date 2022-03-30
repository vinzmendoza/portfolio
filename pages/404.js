import NextLink from "next/link";
import Layout from "../components/layout/Page";

const Page404 = () => {
  return (
    <Layout title="Page Not Found">
      <div className="flex flex-col items-center justify-center h-96">
        <h2 className="mb-4 text-3xl">404 Page Not Found</h2>
        <p className="mb-4 text-lg">
          It seems the page you&apos;re looking for isn&apos;t available
        </p>
        <NextLink href="/" passHref>
          <a className="px-6 py-2 italic transition ease-in-out border-2 border-gray-900 rounded-md hover:bg-gray-900 hover:text-gray-100 dark:border-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900">
            Return Home
          </a>
        </NextLink>
      </div>
    </Layout>
  );
};

export default Page404;

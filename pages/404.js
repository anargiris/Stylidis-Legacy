import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PageNavbar from "../components/PageNavbar";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <PageNavbar />
      <main className="font-cab text-center">
        <Image src="/404.svg" width={450} height={350} layout="intrinsic" />
        <h2 className="text-2xl mb-10">
          Looks like there's nothing here.. yet.
        </h2>
        <Link href="/">
          <span className="underline cursor-pointer text-blue-700">
            Go back to Home page.
          </span>
        </Link>
      </main>
    </>
  );
};

export default NotFound;

import Head from "next/head";
import { useRouter } from "next/router";

const PageHead = ({ title, description }) => {
  const router = useRouter();
  return (
    <Head>
      <meta name="robots" content="follow,index" />
      <meta
        name="viewport"
        content="width=device-width,height=device-height initial-scale=1"
      />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:url" content={`https://stylidis.io${router.asPath}`} />
      <link rel="canonical" href={`https://stylidis.io${router.asPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Anargyros Stylidis" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Astylidis" />
      <meta
        name="twitter:image"
        content="https://stylidis.vercel.app/abstract.png"
      />
      <meta
        property="og:image"
        content="https://stylidis.vercel.app/abstract.png"
      />
    </Head>
  );
};

export default PageHead;

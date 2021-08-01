import EcommerceSection from "../components/EcommerceSection";
import Footer from "../components/Footer";
import HomePageHeader from "../components/HomePageHeader";
import OfferSection from "../components/OfferSection";
import BrandSection from "../components/BrandSection";
import PageHead from "../components/PageHead";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="mlWJ3t_q2M8Vg7oJinpYE8_0MvQoc4qQI2EiJFvgnRo"
        />
      </Head>
      <PageHead
        title="Anargyros Stylidis - Web Developer - Greece"
        description="Web developer from Greece specializing in creating modern, elegant, responsive websites. Contact for more information or if you need your own website."
      />
      <HomePageHeader />
      <OfferSection />
      <EcommerceSection />
      <BrandSection />
      <Footer />
    </>
  );
}

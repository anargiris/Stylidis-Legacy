import EcommerceSection from "../components/EcommerceSection";
import Footer from "../components/Footer";
import HomePageHeader from "../components/HomePageHeader";
import OfferSection from "../components/OfferSection";
import BrandSection from "../components/BrandSection";
import Head from "../components/PageHead";

export default function Home() {
  return (
    <>
      <Head
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

import Banner from "@/components/Banner";
import BrowseCategories from "@/components/BrowseCategories";
import CTASection from "@/components/CTASection";
import DesignInspiration from "@/components/DesignInspiration";
import FeaturedTiles from "@/components/Featured";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhyTilesGallery from "@/components/WhyTilesGallery";



export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedTiles></FeaturedTiles>
      <BrowseCategories></BrowseCategories>
      <DesignInspiration></DesignInspiration>
      <WhyTilesGallery></WhyTilesGallery>
      <CTASection></CTASection>
      <Footer></Footer>
    </>
  );
}

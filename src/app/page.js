import Banner from "@/components/Banner";
import FeaturedTiles from "@/components/Featured";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <FeaturedTiles></FeaturedTiles>
    <Footer></Footer>
    </>
  );
}

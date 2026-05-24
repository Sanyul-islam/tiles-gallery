
import { TilesData } from "@/lib/data";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import BannerSwiper from "./swiper";

const Banner = async () => {
  const tiles = await TilesData();
 
  return (
    <>
     <BannerSwiper></BannerSwiper>
      <div className="min-h-[5vh] p-2 bg-gray-100 flex justify-center align-middle">
        <Marquee pauseOnHover="true">
          {tiles.slice(0, 8).map((tile) => (
            <p key={tile.id} className="mr-4">
              &quot;<span className="text-blue-400">New Arrivals:</span>{" "}
              {tile.title}
            </p>
          ))}
          <p className="mr-4">
            | <span className="text-blue-400">Weekly Feature:</span> Modern
            Geometric Patterns | Join the Community...&quot;
          </p>
        </Marquee>
      </div>
    </>
  );
};

export default Banner;

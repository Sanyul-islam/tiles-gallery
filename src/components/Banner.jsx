

import Link from "next/link";
import Marquee from "react-fast-marquee";

const Banner = async () => {
  
    const Promise = await fetch("http://localhost:3000/data.json");
    const tiles = await Promise.json();
 
  return (
    <>
      <div className="hero min-h-[80vh] bg-[url('/banner.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="hero-overlay bg-black/60"></div>

        {/* Content */}
        <div className="hero-content text-center text-neutral-content px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-6xl font-extrabold leading-tight">
              Looking For Your Perfect Aesthetic Premium Tiles
            </h1>

            <p className="mb-8 text-base md:text-lg text-gray-200">
              Explore premium quality and stylish tile collections designed to
              transform your home, office, and commercial spaces beautifully.
            </p>

            <Link href="/all-tiles" className="btn btn-primary btn-lg">
              Browse Now
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-[5vh] p-2 bg-gray-100">
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

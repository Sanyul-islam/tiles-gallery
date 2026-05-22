
import { TilesData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";


const FeaturedTiles = async() => {
  const tiles = await TilesData()

    // const Promise = await fetch("http://localhost:3000/data.json");
    // const tiles = await Promise.json();
    
//   const [tiles, setTiles] = useState([]);

//   useEffect(() => {
//     fetch()
//       .then((res) => res.json())
//       .then((data) => setTiles(data))
//       .catch((error) => console.log(error));
//   }, []);

  return (
    <section className="container w-11/12 max-w-7xl mx-auto px-4 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Featured Tiles</h2>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore our premium collection of stylish and durable tiles perfect
          for modern interiors and aesthetic spaces.
        </p>
      </div>

      {/* Tiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiles.slice(0, 4).map((tile) => (
          <div
            key={tile.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition duration-300"
          >
            {/* Tile Image */}
            <figure className="relative h-64">
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover"
                unoptimized
              />
            </figure>

            {/* Card Body */}
            <div className="card-body">
              <h3 className="card-title">{tile.name}</h3>

              <p className="text-sm text-gray-500">
                {tile.description?.slice(0, 80)}...
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-primary">
                  ${tile.price}
                </span>

                <Link
                  href={`/tile/${tile.id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTiles;

import { TilesData } from "@/lib/data";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";

const AllTiles = async ({ searchParams }) => {
  const tiles = await TilesData();

  const params = await searchParams;
  const query = params?.search?.toLowerCase() || "";
   
      const filteredTiles = query
        ? tiles.filter((tile) => tile.title.toLowerCase().includes(query))
        : tiles;

    
  return (
    <section className="container w-11/12 max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-4">All Tiles</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Explore our premium collection of stylish and durable tiles perfect
          for modern interiors and aesthetic spaces.
        </p>
      </div>

      <SearchBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTiles.map((tile) => (
          <div key={tile.id} className="card bg-base-100 shadow-xl">
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
                  href={`/all-tiles/tile/${tile.id}`}
                  className="btn btn-primary btn-sm"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredTiles.length === 0 && (
        <div className="text-center mt-12">
          <p className="text-lg text-gray-500">No tiles found.</p>
        </div>
      )}
    </section>
  );
};

export default AllTiles;

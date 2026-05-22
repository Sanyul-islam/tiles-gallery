import { TilesData } from "@/lib/data";
import Image from "next/image";
import { notFound } from "next/navigation";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const tiles = await TilesData();

  const tile = tiles.find((item) => item.id === id);

  if (!tile) {
    notFound();
  }

  return (
    <section className="container w-11/12 max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Side - Large Image */}
        <div className="relative h-100 md:h-137.5 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        {/* Right Side - Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {tile.title}
          </h1>

          <div className="badge badge-primary badge-lg mb-6">
            {tile.category}
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-semibold">
                Creator
              </h3>
              <p className="text-gray-600">
                {tile.creator}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Style Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {tile.styleDescription}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Tags
              </h3>

              <div className="flex flex-wrap gap-2">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-outline badge-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  Material
                </p>
                <p className="font-semibold">
                  {tile.material}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  Dimensions
                </p>
                <p className="font-semibold">
                  {tile.dimensions}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  Price
                </p>
                <p className="font-semibold text-primary">
                  ${tile.price}
                </p>
              </div>

              <div className="bg-base-200 p-4 rounded-xl">
                <p className="text-sm text-gray-500">
                  Availability
                </p>
                <p
                  className={`font-semibold ${
                    tile.inStock
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tile.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsPage;
import Link from "next/link";
import {
  ArrowRight,
  Bath,
  ChefHat,
  Grid3X3,
  Layers3,
  Sparkles,
  SquareStack,
} from "lucide-react";

import { tileCategories } from "@/lib/data";
import Image from "next/image";

const categoryIcons = {
  "Floor Tiles": Layers3,
  "Wall Tiles": Grid3X3,
  Bathroom: Bath,
  Kitchen: ChefHat,
  Marble: SquareStack,
  Decorative: Sparkles,
};

const BrowseCategories = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Explore Collection
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">Browse by Category</h2>

          <p className="mt-4 text-base-content/70">
            Explore our tile collection and find the perfect style for your
            space.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tileCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Grid3X3;

            return (
              <Link href="/all-tiles" key={category.name} className="group">
                <div className="card overflow-hidden bg-base-200 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Image */}
                  <figure className="relative h-56 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />

                    {/* Icon + Name */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                      <div className="mb-3 rounded-full bg-white/20 p-3 backdrop-blur-sm">
                        <Icon size={28} strokeWidth={1.8} />
                      </div>

                      <h3 className="text-2xl font-bold drop-shadow-lg">
                        {category.name}
                      </h3>
                    </div>
                  </figure>

                  {/* Content */}
                  <div className="card-body">
                    <p className="text-sm text-base-content/70">
                      {category.description}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-semibold text-primary">
                        Explore Tiles
                      </span>

                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All */}
        <div className="mt-10 text-center">
          <Link href="/all-tiles" className="btn btn-primary gap-2 px-8">
            View All Tiles
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrowseCategories;

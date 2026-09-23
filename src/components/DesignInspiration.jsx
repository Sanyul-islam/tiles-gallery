import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { inspirations } from "@/lib/data";


const DesignInspiration = () => {
  return (
    <section className="bg-base-100 py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Get Inspired
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Design Inspiration
          </h2>

          <p className="mt-4 text-base-content/70">
            Explore beautiful spaces and discover tile ideas that can transform
            your home.
          </p>
        </div>

        {/* Inspiration Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {inspirations.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                href="/tiles"
                key={item.title}
                className={`group ${
                  index === 0 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl ${
                    index === 0 ? "h-[360px]" : "h-[300px]"
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes={
                      index === 0
                        ? "(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 66vw"
                        : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/75">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                      Explore Designs
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/tiles"
            className="btn btn-outline btn-primary gap-2 px-7"
          >
            Explore All Designs
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DesignInspiration;

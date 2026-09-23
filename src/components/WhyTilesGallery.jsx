import {
  BadgeCheck,
  Compass,
  Search,
  Sparkles,
  UserRound,
  WalletCards,
} from "lucide-react";

const features = [
  {
    title: "Easy Discovery",
    description:
      "Find the right tiles quickly with simple search, categories, and useful filters.",
    icon: Search,
  },
  {
    title: "Curated Designs",
    description:
      "Explore a carefully organized collection of modern, classic, and unique tile designs.",
    icon: Sparkles,
  },
  {
    title: "Detailed Information",
    description:
      "Check important tile details such as material, dimensions, price, and availability.",
    icon: BadgeCheck,
  },
  {
    title: "Explore Styles",
    description:
      "Discover different tile styles and get inspiration for your next interior project.",
    icon: Compass,
  },
  {
    title: "Creator Profiles",
    description:
      "Discover talented tile creators and explore their collections in one place.",
    icon: UserRound,
  },
  {
    title: "Transparent Pricing",
    description:
      "Compare tile prices easily and make informed decisions for your project.",
    icon: WalletCards,
  },
];

const WhyTilesGallery = () => {
  return (
    <section className="bg-base-200 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Why Choose Us
          </p>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Why Tiles Gallery?
          </h2>

          <p className="mt-4 text-base-content/70">
            Everything you need to discover, compare, and get inspired by
            beautiful tile designs.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-base-300 bg-base-100 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-content">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-6 text-base-content/65">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-14 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <Sparkles className="mb-4 text-primary" size={30} />

            <h3 className="text-2xl font-bold">Your Next Space Starts Here</h3>

            <p className="mt-3 text-base-content/70">
              Discover tile designs that match your style, explore new ideas,
              and find inspiration for every room.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTilesGallery;

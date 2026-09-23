import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-base-200 px-4 py-20">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-primary-content shadow-xl md:px-12 lg:px-16">
          {/* Decorative Elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
              <Sparkles size={28} />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-content/80">
              Start Exploring
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Find the Perfect Tiles for Your Space
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-content/80 md:text-lg">
              Explore beautiful tile designs, discover new styles, and find
              inspiration for your next home or interior project.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/all-tiles"
                className="btn btn-lg border-none bg-white px-8 text-primary hover:bg-white/90"
              >
                Explore Tiles
                <ArrowRight size={19} />
              </Link>

              <Link
                href="/"
                className="btn btn-lg btn-outline border-white/50 px-8 text-primary-content hover:border-white hover:bg-white/10 hover:text-primary-content"
              >
                Get Inspired
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

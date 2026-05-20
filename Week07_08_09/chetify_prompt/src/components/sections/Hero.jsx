import { ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { featuredRecipe } from '../data/recipes';



function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={featuredRecipe.image}
          alt="Editorial cooking scene"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-950/35" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-14 lg:min-h-[700px] lg:py-20">
        <div className="flex min-h-[560px] items-start lg:items-center">
          <div className="w-full max-w-md rounded-[28px] border border-white/60 bg-white/95 p-6 shadow-xl backdrop-blur sm:p-8">
            <Badge>{featuredRecipe.badge}</Badge>

            <h1 className="mt-6 font-serif text-3xl font-semibold tracking-tight text-rose-500 sm:text-4xl">
              {featuredRecipe.title}
            </h1>

            <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-base">
              {featuredRecipe.description}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <img
                src={featuredRecipe.author.avatar}
                alt={featuredRecipe.author.name}
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                  Author
                </p>
                <p className="text-sm font-medium text-neutral-900">
                  {featuredRecipe.author.name}
                </p>
              </div>
            </div>

            <Button className="mt-8">
              {featuredRecipe.cta}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

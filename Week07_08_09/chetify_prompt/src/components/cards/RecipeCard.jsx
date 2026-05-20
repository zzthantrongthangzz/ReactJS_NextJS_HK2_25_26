import { Bookmark } from 'lucide-react';
import Card from '../ui/Card';

function RecipeCard({ recipe }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-2 text-base font-semibold text-neutral-900">
              {recipe.title}
            </h3>
            <p className="mt-1 text-sm text-neutral-500">{recipe.category}</p>
          </div>

          <button
            type="button"
            aria-label={`Save ${recipe.title}`}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
          >
            <Bookmark className="h-4 w-4" />
          </button>
        </div>

        <p className="mt-4 text-xs font-medium text-rose-500">{recipe.time}</p>
      </div>
    </Card>
  );
}

export default RecipeCard;
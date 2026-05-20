import { Bookmark } from 'lucide-react';
import Card from '../ui/Card';

function EditorCard({ item }) {
  return (
    <Card className="overflow-hidden">
      <div className="grid gap-0 md:grid-cols-[180px_1fr]">
        <div className="aspect-[4/3] md:aspect-auto md:h-full">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-500">{item.time}</p>
            </div>

            <button
              type="button"
              aria-label={`Save ${item.title}`}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-300 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-500"
            >
              <Bookmark className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <img
              src={item.author.avatar}
              alt={item.author.name}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-neutral-700">
              {item.author.name}
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-neutral-500">
            {item.description}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default EditorCard;
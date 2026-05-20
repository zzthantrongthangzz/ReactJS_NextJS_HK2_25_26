import { PackageSearch } from 'lucide-react';
import { searchSuggestions } from '../../data/searchSuggestions';
import SearchTag from './SearchTag';

function EmptyResults({ query = 'cakescascsa', onSelectSuggestion }) {
  return (
    <section className="flex min-h-[420px] items-start justify-center rounded-2xl bg-transparent px-4 py-6 text-center sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
          Sorry, no results were found for “{query}”
        </h1>

        <div className="mt-10 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-rose-100 blur-2xl" />
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full">
              <PackageSearch className="h-40 w-40 text-rose-500" strokeWidth={1.6} />
            </div>
          </div>
        </div>

        <p className="mt-8 text-2xl text-neutral-700">
          We have all your Independence Day sweets covered.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {searchSuggestions.map((item) => (
            <SearchTag
              key={item.id}
              label={item.label}
              tone={item.tone}
              onClick={() => onSelectSuggestion?.(item.label)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EmptyResults;

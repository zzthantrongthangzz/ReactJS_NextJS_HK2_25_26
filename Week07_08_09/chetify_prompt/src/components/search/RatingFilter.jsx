import { Star } from 'lucide-react';

function RatingRow({ id, value, checked, onChange }) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-center gap-3 text-sm text-neutral-700"
    >
      <span className="relative flex h-4 w-4 items-center justify-center">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="peer sr-only"
        />
        <span className="h-4 w-4 rounded border border-neutral-300 bg-white transition-all duration-300 peer-checked:border-rose-500 peer-checked:bg-rose-500 peer-focus-visible:ring-4 peer-focus-visible:ring-rose-100" />
        <svg
          viewBox="0 0 16 16"
          className="pointer-events-none absolute h-3 w-3 scale-0 text-white transition-transform duration-200 peer-checked:scale-100"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 8.2 6.3 11l6.2-6.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <span className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < value
                ? 'fill-amber-400 text-amber-400'
                : 'fill-neutral-300 text-neutral-300'
            }`}
          />
        ))}
      </span>
    </label>
  );
}

function RatingFilter({ ratings, setRatings }) {
  const handleToggle = (id) => {
    setRatings((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="space-y-4">
      {ratings.map((item) => (
        <RatingRow
          key={item.id}
          id={item.id}
          value={item.value}
          checked={item.checked}
          onChange={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}

export default RatingFilter;

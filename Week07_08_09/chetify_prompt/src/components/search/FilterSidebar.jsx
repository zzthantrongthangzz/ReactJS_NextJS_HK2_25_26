import { SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { initialTimeRange, ratingOptions, typeOptions } from '../../data/filters';
import Button from '../ui/Button';
import Checkbox from '../ui/Checkbox';
import FilterSection from './FilterSection';
import RatingFilter from './RatingFilter';
import TimeRangeFilter from './TimeRangeFilter';

function FilterSidebar() {
  const [types, setTypes] = useState(typeOptions);
  const [ratings, setRatings] = useState(ratingOptions);
  const [range, setRange] = useState(initialTimeRange);

  const handleTypeToggle = (id) => {
    setTypes((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <aside className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 px-4 py-5 sm:px-5">
        <SlidersHorizontal className="h-5 w-5 text-neutral-900" />
        <h2 className="text-[15px] font-bold uppercase tracking-wide text-neutral-900">
          Filters
        </h2>
      </div>

      <FilterSection title="Type">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {types.map((item) => (
            <Checkbox
              key={item.id}
              id={item.id}
              label={item.label}
              checked={item.checked}
              onChange={() => handleTypeToggle(item.id)}
            />
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Time">
        <TimeRangeFilter range={range} setRange={setRange} />
      </FilterSection>

      <FilterSection title="Rating">
        <RatingFilter ratings={ratings} setRatings={setRatings} />
      </FilterSection>

      <div className="border-t border-neutral-200 px-4 py-5 sm:px-5">
        <Button className="w-full rounded-lg">Apply</Button>
      </div>
    </aside>
  );
}

export default FilterSidebar;

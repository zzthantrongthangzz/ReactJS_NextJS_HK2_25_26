import { ChevronUp } from 'lucide-react';

function FilterSection({ title, children }) {
  return (
    <section className="border-t border-neutral-200 px-4 py-5 sm:px-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-semibold text-neutral-900">{title}</h3>
        <ChevronUp className="h-4 w-4 text-rose-500" />
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default FilterSection;

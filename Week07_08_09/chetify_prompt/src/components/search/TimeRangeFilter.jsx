function TimeRangeFilter({ range, setRange }) {
  const handleMinChange = (event) => {
    const next = Number(event.target.value);
    setRange((prev) => ({
      ...prev,
      min: Math.min(next, prev.max - 1),
    }));
  };

  const handleMaxChange = (event) => {
    const next = Number(event.target.value);
    setRange((prev) => ({
      ...prev,
      max: Math.max(next, prev.min + 1),
    }));
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-center gap-10 text-xs text-neutral-500">
        <span>{range.min} minutes</span>
        <span>{range.max} minutes</span>
      </div>

      <div className="relative h-8">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-rose-100" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-rose-500"
          style={{
            left: `${(range.min / 60) * 100}%`,
            width: `${((range.max - range.min) / 60) * 100}%`,
          }}
        />

        <input
          aria-label="Minimum cooking time"
          type="range"
          min="0"
          max="60"
          value={range.min}
          onChange={handleMinChange}
          className="range-thumb pointer-events-none absolute inset-0 h-8 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-rose-500 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-rose-500 [&::-moz-range-thumb]:bg-white"
        />

        <input
          aria-label="Maximum cooking time"
          type="range"
          min="0"
          max="60"
          value={range.max}
          onChange={handleMaxChange}
          className="range-thumb pointer-events-none absolute inset-0 h-8 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-rose-500 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-rose-500 [&::-moz-range-thumb]:bg-white"
        />
      </div>
    </div>
  );
}

export default TimeRangeFilter;

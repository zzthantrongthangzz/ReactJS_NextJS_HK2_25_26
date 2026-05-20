const toneClasses = {
  rose: 'bg-rose-100 text-rose-500 hover:bg-rose-200',
  violet: 'bg-violet-100 text-violet-500 hover:bg-violet-200',
  pink: 'bg-pink-100 text-pink-500 hover:bg-pink-200',
  sky: 'bg-sky-100 text-sky-600 hover:bg-sky-200',
};

function SearchTag({ label, tone = 'rose', onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${toneClasses[tone]}`}
    >
      {label}
    </button>
  );
}

export default SearchTag;

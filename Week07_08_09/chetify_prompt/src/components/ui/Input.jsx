function Input({ className = '', ...props }) {
  return (
    <input
      className={`h-11 w-full rounded-full border border-neutral-200 bg-white px-4 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100 transition-all duration-300 ${className}`}
      {...props}
    />
  );
}

export default Input;
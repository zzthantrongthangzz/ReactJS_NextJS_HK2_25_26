import clsx from 'clsx';

function Badge({ children, className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-600',
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
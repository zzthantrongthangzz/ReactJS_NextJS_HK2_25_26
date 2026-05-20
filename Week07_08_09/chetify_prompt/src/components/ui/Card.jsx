import clsx from 'clsx';

function Card({ children, className }) {
  return (
    <article
      className={clsx(
        'rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
        className
      )}
    >
      {children}
    </article>
  );
}

export default Card;
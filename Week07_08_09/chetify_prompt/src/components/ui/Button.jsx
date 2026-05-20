const variants = {
  primary:
    'bg-rose-500 text-white hover:bg-rose-600 focus-visible:ring-rose-300 active:bg-rose-700',
  secondary:
    'bg-white text-neutral-900 ring-1 ring-inset ring-neutral-200 hover:bg-neutral-50 focus-visible:ring-neutral-300',
  ghost:
    'bg-transparent text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-300',
  dark: 'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-700',
  social:
    'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus-visible:ring-neutral-300 active:bg-neutral-300',
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10',
};

function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-4 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
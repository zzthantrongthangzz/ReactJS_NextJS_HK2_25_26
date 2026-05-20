function SectionHeader({ title, subtitle, align = 'center' }) {
    const alignment = align === 'left' ? 'text-left' : 'text-center';
  
    return (
      <header className={`mx-auto max-w-2xl ${alignment}`}>
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-rose-500 sm:text-4xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-sm text-neutral-500 sm:text-base">{subtitle}</p>
        ) : null}
      </header>
    );
  }
  
  export default SectionHeader;
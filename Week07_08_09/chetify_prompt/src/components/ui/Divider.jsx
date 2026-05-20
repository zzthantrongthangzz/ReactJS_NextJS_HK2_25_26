function Divider({ label = 'OR' }) {
    return (
      <div className="flex items-center gap-3" aria-hidden="true">
        <div className="h-px flex-1 bg-neutral-300" />
        <span className="text-sm font-medium uppercase tracking-wide text-neutral-400">
          {label}
        </span>
        <div className="h-px flex-1 bg-neutral-300" />
      </div>
    );
  }
  
  export default Divider;
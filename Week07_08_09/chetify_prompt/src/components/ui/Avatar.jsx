function Avatar({ src, alt, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-11 w-11 rounded-full object-cover ring-2 ring-white ${className}`}
    />
  );
}

export default Avatar;

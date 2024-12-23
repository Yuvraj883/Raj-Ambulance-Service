import React from 'react';

interface SEOImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function SEOImage({ src, alt, className = '' }: SEOImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      width="800"
      height="600"
    />
  );
}
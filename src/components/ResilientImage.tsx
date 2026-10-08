import React, { useState } from 'react';
import { Utensils } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: 'lazy' | 'eager';
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  loading = 'lazy',
  fallbackLabel,
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3EFEA] via-[#EAE3DA] to-[#DFD5C8] text-[#5C5650] p-6 text-center ${containerClassName}`}
        role="img"
        aria-label={alt}
      >
        <Utensils className="w-7 h-7 text-[#C85A32]/70 mb-2 stroke-[1.5]" />
        <span className="font-editorial text-lg font-medium text-[#181615]">
          {fallbackLabel || 'Sach’a Yuntas'}
        </span>
        <span className="text-xs text-[#5C5650] mt-1 max-w-[220px]">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

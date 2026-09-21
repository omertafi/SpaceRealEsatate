import React from 'react';

interface SpaceLogoProps {
  /**
   * 'full': Complete official logo image (Mark + SPACE + REAL ESTATE) directly from the user's file
   * 'horizontal': Official mark on the left + SPACE & REAL ESTATE on the right
   * 'mark': Official mark symbol only
   * 'original': Exact uncompressed JPEG file as uploaded by the user
   */
  variant?: 'full' | 'horizontal' | 'mark' | 'original';
  /**
   * Color theme ('#FFFFFF' or 'white' uses the inverted white-on-transparent logo for dark sections)
   */
  color?: string;
  /**
   * Accent color for subtitle
   */
  accentColor?: string;
  /**
   * Outer container styling
   */
  className?: string;
  /**
   * Custom width/height or classes for the mark image
   */
  markClassName?: string;
}

export const SpaceLogo: React.FC<SpaceLogoProps> = ({
  variant = 'horizontal',
  color = '#0D1117',
  accentColor = '#6B7280',
  className = '',
  markClassName = 'w-9 h-9',
}) => {
  const isDarkBg = color === '#FFFFFF' || color === 'white' || color.toLowerCase().includes('white');
  const subtitleColor = accentColor || (isDarkBg ? '#9CA3AF' : '#6B7280');

  // Exact mark image cut directly from the user's uploaded logo in logo/logo space.jpeg with complete bottom box
  const markSrc = isDarkBg ? '/space-mark-white.png' : '/space-mark.png';

  // Exact complete logo image with transparent background directly from logo/logo space.jpeg
  const fullLogoSrc = isDarkBg ? '/space-logo-white.png' : '/space-logo.png';

  if (variant === 'original') {
    return (
      <img
        src="/logo space.jpeg"
        alt="SPACE Real Estate Logo"
        className={`object-contain max-w-full ${className}`}
      />
    );
  }

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src={markSrc}
          alt="SPACE Real Estate Mark"
          className={`object-contain ${markClassName}`}
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <img
          src={fullLogoSrc}
          alt="SPACE Real Estate"
          className={`object-contain ${markClassName || 'h-40 w-auto'}`}
        />
      </div>
    );
  }

  // variant === 'horizontal'
  return (
    <div className={`flex items-center gap-3 text-left rtl:text-right ${className}`}>
      <div className="shrink-0 flex items-center justify-center">
        <img
          src={markSrc}
          alt="SPACE Mark"
          className={`object-contain ${markClassName}`}
        />
      </div>
      <div className="flex flex-col justify-center select-none">
        <span
          className="text-[17px] font-black tracking-[0.18em] uppercase leading-none font-sans"
          style={{ color }}
        >
          SPACE
        </span>
        <span
          className="text-[9.5px] font-bold tracking-[0.28em] uppercase leading-none mt-1.5 font-sans"
          style={{ color: subtitleColor }}
        >
          REAL ESTATE
        </span>
      </div>
    </div>
  );
};


import React from 'react';

export interface SpaceLogoProps {
  /**
   * 'full': Complete official logo image (Mark + SPACE + REAL ESTATE stacked)
   * 'horizontal': Official mark on the left + SPACE & REAL ESTATE on the right
   * 'image-horizontal': Pure high-resolution horizontal PNG asset
   * 'mark': Official mark symbol only
   * 'original': Exact uncompressed JPEG file as uploaded by the user
   */
  variant?: 'full' | 'horizontal' | 'image-horizontal' | 'mark' | 'original';
  /**
   * Size presets for perfect proportions across devices
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'responsive';
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
  size = 'responsive',
  color = '#0D1117',
  accentColor = '#6B7280',
  className = '',
  markClassName,
}) => {
  const isDarkBg = color === '#FFFFFF' || color === 'white' || color.toLowerCase().includes('white');
  const subtitleColor = accentColor || (isDarkBg ? '#9CA3AF' : '#6B7280');

  // Exact mark image cut directly from the user's uploaded logo in logo/logo space.jpeg
  const markSrc = isDarkBg ? '/space-mark-white.png' : '/space-mark.png';

  // Exact complete logo image with transparent background
  const fullLogoSrc = isDarkBg ? '/space-logo-white.png' : '/space-logo.png';
  const horizontalImgSrc = isDarkBg ? '/space-logo-horizontal-white.png' : '/space-logo-horizontal.png';

  if (variant === 'original') {
    return (
      <img
        src="/logo space.jpeg"
        alt="SPACE Real Estate Logo"
        className={`object-contain max-w-full ${className}`}
      />
    );
  }

  if (variant === 'image-horizontal') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`} dir="ltr">
        <img
          src={horizontalImgSrc}
          alt="SPACE Real Estate"
          className={`object-contain max-w-full ${markClassName || 'h-8 sm:h-9 md:h-10 w-auto'}`}
        />
      </div>
    );
  }

  if (variant === 'mark') {
    const markDefaultSize =
      size === 'xs'
        ? 'w-6 h-6'
        : size === 'sm'
        ? 'w-7 h-7'
        : size === 'md'
        ? 'w-9 h-9'
        : size === 'lg'
        ? 'w-12 h-12'
        : 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10';

    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`} dir="ltr">
        <img
          src={markSrc}
          alt="SPACE Real Estate Mark"
          className={`object-contain aspect-square select-none pointer-events-none ${markClassName || markDefaultSize}`}
        />
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center shrink-0 ${className}`} dir="ltr">
        <img
          src={fullLogoSrc}
          alt="SPACE Real Estate"
          className={`object-contain select-none max-w-full ${markClassName || 'h-28 sm:h-36 md:h-40 w-auto'}`}
        />
      </div>
    );
  }

  // variant === 'horizontal'
  // Define proportional styling for each size preset so the logo scales cleanly on any screen
  let markClasses = markClassName;
  let gapClass = 'gap-2 sm:gap-2.5 md:gap-3';
  let titleClass = 'text-[14px] xs:text-[15px] sm:text-[16px] md:text-[17px] tracking-[0.16em] sm:tracking-[0.18em]';
  let subtitleClass = 'text-[7.5px] xs:text-[8px] sm:text-[8.5px] md:text-[9.5px] tracking-[0.22em] sm:tracking-[0.28em] mt-1 sm:mt-1.5';

  if (size === 'xs') {
    markClasses = markClassName || 'w-6 h-6';
    gapClass = 'gap-1.5';
    titleClass = 'text-[12px] tracking-[0.15em]';
    subtitleClass = 'text-[6.5px] tracking-[0.2em] mt-0.5';
  } else if (size === 'sm') {
    markClasses = markClassName || 'w-7 h-7 sm:w-8 sm:h-8';
    gapClass = 'gap-2';
    titleClass = 'text-[13.5px] sm:text-[14.5px] tracking-[0.16em]';
    subtitleClass = 'text-[7.5px] sm:text-[8px] tracking-[0.22em] mt-1';
  } else if (size === 'md') {
    markClasses = markClassName || 'w-9 h-9';
    gapClass = 'gap-2.5';
    titleClass = 'text-[16px] tracking-[0.18em]';
    subtitleClass = 'text-[9px] tracking-[0.26em] mt-1';
  } else if (size === 'lg') {
    markClasses = markClassName || 'w-11 h-11';
    gapClass = 'gap-3.5';
    titleClass = 'text-[19px] tracking-[0.19em]';
    subtitleClass = 'text-[10.5px] tracking-[0.29em] mt-1.5';
  } else {
    // responsive default
    markClasses = markClassName || 'w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10';
  }

  return (
    <div
      className={`inline-flex items-center shrink-0 select-none whitespace-nowrap text-left ${gapClass} ${className}`}
      dir="ltr"
    >
      <div className="shrink-0 flex items-center justify-center">
        <img
          src={markSrc}
          alt="SPACE Mark"
          className={`object-contain aspect-square select-none pointer-events-none ${markClasses}`}
        />
      </div>
      <div className="flex flex-col justify-center select-none shrink-0 whitespace-nowrap min-w-0">
        <span
          className={`font-black uppercase leading-none font-sans whitespace-nowrap ${titleClass}`}
          style={{ color }}
        >
          SPACE
        </span>
        <span
          className={`font-bold uppercase leading-none font-sans whitespace-nowrap ${subtitleClass}`}
          style={{ color: subtitleColor }}
        >
          REAL ESTATE
        </span>
      </div>
    </div>
  );
};



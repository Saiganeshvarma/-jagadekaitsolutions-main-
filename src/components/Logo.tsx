import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'full' | 'compact';
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true, variant = 'full' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        viewBox="0 0 150 150"
        className="w-full h-full"
        style={{ imageRendering: 'crisp-edges' }}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#EA580C', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DC2626', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Left curved lines */}
        <g transform="translate(25, 75)">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={`left-${i}`}
              d={`M ${i * 6} 0 Q ${i * 6 + 10} -20, ${i * 6 + 20} -35`}
              stroke="url(#logoGradient)"
              strokeWidth="2.5"
              fill="none"
              opacity={1 - i * 0.12}
            />
          ))}
        </g>

        {/* Right curved lines */}
        <g transform="translate(95, 75)">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={`right-${i}`}
              d={`M ${i * 6} 0 Q ${i * 6 - 10} 20, ${i * 6 - 20} 35`}
              stroke="url(#logoGradient)"
              strokeWidth="2.5"
              fill="none"
              opacity={1 - i * 0.12}
            />
          ))}
        </g>

        {/* Center dots pattern */}
        <g transform="translate(65, 45)">
          {[0, 1, 2, 3, 4].map((row) => (
            <g key={`row-${row}`}>
              {[0, 1, 2, 3].map((col) => (
                <rect
                  key={`dot-${row}-${col}`}
                  x={col * 5}
                  y={row * 5}
                  width="3"
                  height="3"
                  fill="url(#logoGradient)"
                  opacity={0.9}
                />
              ))}
            </g>
          ))}
        </g>

        {/* Center horizontal lines (E-like shapes) */}
        <g transform="translate(65, 70)">
          <rect x="0" y="0" width="18" height="2" fill="url(#logoGradient)" rx="1" />
          <rect x="0" y="8" width="15" height="2" fill="url(#logoGradient)" rx="1" />
          <rect x="0" y="16" width="18" height="2" fill="url(#logoGradient)" rx="1" />
        </g>
      </svg>

      {showText && (
        <div className="ml-3">
          {variant === 'full' ? (
            <>
              <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent leading-tight">
                JAGADEKA
              </div>
              <div className="text-[10px] text-gray-600 font-semibold tracking-wide mt-0.5 leading-tight">
                SMART SOLUTIONS
              </div>
              <div className="text-[8px] text-gray-500 font-medium tracking-wider mt-0.5">
                A VALUE ADDITION TO YOUR SUCCESS
              </div>
            </>
          ) : (
            <>
              <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                JAGADEKA
              </div>
              <div className="text-xs text-gray-500 font-medium -mt-1">Smart Solutions</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;

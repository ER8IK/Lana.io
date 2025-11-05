"use client";

interface LogoProps {
  size?: number; // размер в px
  useGradient?: boolean; // использовать градиент или currentColor
}

export default function Logo({ size = 60, useGradient = true }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Определяем градиент, если нужно */}
      {useGradient && (
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      )}

      {/* Внешний круг */}
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke={useGradient ? "url(#logoGradient)" : "currentColor"}
        strokeWidth="5"
        fill="none"
      />

      {/* Горизонтальная линия */}
      <line
        x1="5"
        y1="50"
        x2="95"
        y2="50"
        stroke={useGradient ? "url(#logoGradient)" : "currentColor"}
        strokeWidth="3"
      />

      {/* Вертикальная линия */}
      <line
        x1="50"
        y1="10"
        x2="50"
        y2="95"
        stroke={useGradient ? "url(#logoGradient)" : "currentColor"}
        strokeWidth="3"
      />

      {/* Стрелка на вершине вертикальной линии */}
      <polygon
        points="48,10 52,10 50,5"
        fill={useGradient ? "url(#logoGradient)" : "currentColor"}
      />
    </svg>
  );
}

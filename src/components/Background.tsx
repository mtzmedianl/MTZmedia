import React from "react";

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* SVG GRID BACKGROUND */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M64 0 L0 0 0 64"
              fill="none"
              stroke="rgba(30,144,255,0.3)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* RADIAL MASK FADE */}
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, black 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 65% 65% at 50% 50%, black 60%, transparent 100%)",
          background: "rgba(0,0,0,0.25)",
        }}
      />
    </div>
  );
};

export default Background;

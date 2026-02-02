import React from "react";

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle glow overlays */}
      <div className="absolute w-[400px] h-[400px] top-1/3 left-1/4 rounded-full bg-dodger-blue/10 blur-[150px] animate-[pulse_18s_ease-in-out_infinite]"></div>
      <div className="absolute w-[350px] h-[350px] bottom-1/4 right-1/3 rounded-full bg-dodger-blue/8 blur-[120px] animate-[pulse_22s_ease-in-out_infinite]"></div>
    </div>
  );
};

export default Background;

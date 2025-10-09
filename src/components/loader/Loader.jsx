import React from "react";
import { OrbitProgress } from "react-loading-indicators";

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 space-y-4">
      <div className="flex items-center animate-pulse gray">
        <span className="text-7xl">L</span>
        <span>
          <OrbitProgress
            variant="track-disc"
            color="#627382"
            size="small"
            text=""
            textColor=""
          />
        </span>
        <span className="text-7xl">ADING...</span>
      </div>
    </div>
  );
};

export default Loader;

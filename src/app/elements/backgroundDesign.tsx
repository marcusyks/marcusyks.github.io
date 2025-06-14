import React from "react";

type BackgroundDesignProps = {
  direction?: string;
};

export default function BackgroundDesign() {
  return (
    <div className="absolute inset-0">
      <div
        className="relative h-full bg-secondary [&>div]:absolute [&>div]:inset-0
        [background:radial-gradient(circle_2000px_at_30%_200px,#b1c2e6,transparent)]
        dark:[background:radial-gradient(circle_2000px_at_30%_200px,#3c3d3d,transparent)]"
      >
        <div></div>
      </div>
    </div>
  );
};
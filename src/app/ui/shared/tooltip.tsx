"use client";

import React, { useState } from "react";

const Tooltip: React.FC<{ text: string; children: React.ReactNode }> = ({
  text,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <div className="tooltip-text opacity-75">{text}</div>}
    </div>
  );
};

export default Tooltip;

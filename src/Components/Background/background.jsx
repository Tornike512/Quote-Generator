import React from "react";
import BackgroundImage from "./colorful-mountains-night-minimal.jpg";

export function Background({ props, children }) {
  return (
    <div className="fixed w-full h-full overflow-hidden left-0 top-0">
      <img
        className="w-full h-full object-cover"
        src={BackgroundImage}
        alt="Mountain Photo"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
}

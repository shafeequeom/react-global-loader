import React from "react";

const LoaderContainer = ({
  backgroundColor = "#0000003a",
  opacity = 1,
  children,
}: {
  backgroundColor?: string;
  opacity?: number;
  children?: any;
}) => {
  return (
    <div
      id="rgl-overlay"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        opacity: opacity,
        background: backgroundColor,
        transition: "opacity 0.2s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {children ? children : "Loading.."}
      </div>
    </div>
  );
};

export default LoaderContainer;

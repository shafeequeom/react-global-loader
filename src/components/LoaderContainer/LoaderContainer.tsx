import React from "react";

const LoaderContainer = ({
  backgroundColor = "#0000003a",
  opacity = 1,
  justify = "center",
  align = "center",
  defaultText = "Loading..",
  defaultShow = false,
  children,
}: {
  backgroundColor?: string;
  opacity?: number;
  justify?: string;
  align?: string;
  defaultText?: string;
  defaultShow?: boolean;
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
        display: defaultShow ? "block" : "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: justify,
          alignItems: justify,
        }}
      >
        {children ? children : defaultText}
      </div>
    </div>
  );
};

export default LoaderContainer;

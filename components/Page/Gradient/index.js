import React from "react";
const gradient = new Gradient();
import { Gradient } from "./Gradient.js";

const Background = () => {
  const ref = React.useRef();

  React.useEffect(() => {
    if (ref.current) {
      console.log(ref);
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  const canvasStyles = {
    top: 0,
    left: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
    position: "absolute",
    "--gradient-color-1": "#022233",
    "--gradient-color-2": "#021822",
    "--gradient-color-3": "#196F4B",
    "--gradient-color-4": "#093D42",
  };

  return (
    <canvas
      ref={ref}
      id="gradient-canvas"
      data-transition-in
      style={canvasStyles}
    />
  );
};

export default Background;

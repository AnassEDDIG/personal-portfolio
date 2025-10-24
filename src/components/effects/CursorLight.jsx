import React, { useEffect, useState } from "react";

export const CursorLight = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });
  const [stylePos, setStylePos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    let animationFrameId;
    const follow = () => {
      setStylePos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return { x: prev.x + dx * 0.12, y: prev.y + dy * 0.12 }; // slightly slower for smoothness
      });
      animationFrameId = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  const style = {
    position: "fixed",
    pointerEvents: "none",
    left: stylePos.x,
    top: stylePos.y,
    width: 350,
    height: 350,
    borderRadius: "50%",
    background: `radial-gradient(
      circle,
      rgba(124, 77, 255, 0.15) 0%,
      rgba(124, 77, 255, 0.08) 40%,
      rgba(124, 77, 255, 0.02) 70%,
      rgba(124, 77, 255, 0) 100%
    )`,
    transform: "translate(-50%, -50%)",
    mixBlendMode: "screen",
    filter: "blur(22px)",
    zIndex: 9999,
    willChange: "transform",
    transition: "background 0.3s ease",
  };

  return <div style={style} />;
};

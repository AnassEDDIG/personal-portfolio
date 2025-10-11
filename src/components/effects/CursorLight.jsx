import React, { useEffect, useState } from 'react';

const CursorLight = () => {
    const [position, setPosition] = useState({ x: -200, y: -200 });
    const [stylePos, setStylePos] = useState({ x: -200, y: -200 });

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    useEffect(() => {
        let animationFrameId;

        const follow = () => {
            setStylePos((prev) => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.15,
                    y: prev.y + dy * 0.15,
                };
            });
            animationFrameId = requestAnimationFrame(follow);
        };

        follow();

        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    const style = {
        position: 'fixed',
        pointerEvents: 'none',
        left: stylePos.x,
        top: stylePos.y,
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: `radial-gradient(
    circle,
    rgba(255, 255, 255, 0.12) 0%,
    rgba(255, 255, 255, 0.07) 40%,
    rgba(255, 255, 255, 0.02) 70%,
    rgba(255, 255, 255, 0) 100%
  )`,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen',
        filter: 'blur(18px)',
        zIndex: 9999,
        willChange: 'transform',
    };

    return <div style={style} />;
};

export default CursorLight;

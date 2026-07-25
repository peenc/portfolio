import React, { useRef, useEffect } from 'react';
import { useThemeLang } from '../context/ThemeLangContext.jsx';

export default function InteractiveGrid() {
    const canvasRef = useRef(null);
    const { darkMode } = useThemeLang();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        // Dot configuration
        const dotRadius = 1.5;
        const spacing = 35; // How close the dots are
        const mouseRadius = 120; // Radius of mouse influence

        let dots = [];
        let mouse = { x: -1000, y: -1000 };

        const resize = () => {
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            initDots();
        };

        const initDots = () => {
            dots = [];
            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    dots.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y
                    });
                }
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Set dot color dynamically based on theme
            ctx.fillStyle = darkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)';

            dots.forEach(dot => {
                const dx = mouse.x - dot.x;
                const dy = mouse.y - dot.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Spring physics
                const force = 0.05; // Spring force pulling back to origin
                
                if (dist < mouseRadius) {
                    // Push away from mouse
                    const angle = Math.atan2(dy, dx);
                    const push = (mouseRadius - dist) * 0.1; 
                    
                    dot.x -= Math.cos(angle) * push;
                    dot.y -= Math.sin(angle) * push;
                } else {
                    // Return to origin point smoothly
                    dot.x += (dot.originX - dot.x) * force;
                    dot.y += (dot.originY - dot.y) * force;
                }

                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', resize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]); // Re-run effect if theme changes to update fillStyle instantly

    return (
        <canvas 
            ref={canvasRef} 
            className="w-full h-full absolute inset-0 block cursor-crosshair z-0"
        />
    );
}

import React, { useRef, useEffect } from 'react';
import { useThemeLang } from '../context/ThemeLangContext.jsx';

export default function InteractiveCircuit() {
    const canvasRef = useRef(null);
    const { darkMode } = useThemeLang();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        let traces = [];
        let pads = [];
        let mouse = { x: -1000, y: -1000 };
        const gridSize = 50;

        const resize = () => {
            const parent = canvas.parentElement;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
            generateCircuit();
        };

        const generateCircuit = () => {
            traces = [];
            pads = [];
            const cols = Math.floor(canvas.width / gridSize) + 2;
            const rows = Math.floor(canvas.height / gridSize) + 2;
            
            const points = [];
            for (let i = 0; i < cols; i++) {
                points[i] = [];
                for (let j = 0; j < rows; j++) {
                    points[i][j] = { x: i * gridSize, y: j * gridSize };
                }
            }

            // Number of distinct circuit paths
            const pathCount = Math.floor((cols * rows) / 3);
            
            for(let p = 0; p < pathCount; p++) {
                let startCol = Math.floor(Math.random() * cols);
                let startRow = Math.floor(Math.random() * rows);
                let current = points[startCol][startRow];
                
                // Add a start pad (solder joint)
                pads.push({ x: current.x, y: current.y, brightness: 0 });

                let pathLength = Math.floor(Math.random() * 4) + 2; // 2 to 5 segments
                for(let s = 0; s < pathLength; s++) {
                    const dirs = [
                        {dc: 0, dr: -1}, {dc: 1, dr: 0}, {dc: 0, dr: 1}, {dc: -1, dr: 0}, // orthogonal
                        {dc: 1, dr: -1}, {dc: 1, dr: 1}, {dc: -1, dr: 1}, {dc: -1, dr: -1} // diagonal
                    ];
                    const dir = dirs[Math.floor(Math.random() * dirs.length)];
                    
                    const nextCol = startCol + dir.dc;
                    const nextRow = startRow + dir.dr;
                    
                    if (nextCol >= 0 && nextCol < cols && nextRow >= 0 && nextRow < rows) {
                        const nextNode = points[nextCol][nextRow];
                        
                        traces.push({
                            x1: current.x, y1: current.y,
                            x2: nextNode.x, y2: nextNode.y,
                            brightness: 0,
                            cx: (current.x + nextNode.x) / 2,
                            cy: (current.y + nextNode.y) / 2
                        });
                        
                        current = nextNode;
                        startCol = nextCol;
                        startRow = nextRow;
                    } else {
                        break;
                    }
                }
                
                // Add an end pad
                pads.push({ x: current.x, y: current.y, brightness: 0 });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const baseColor = darkMode ? '255, 255, 255' : '0, 0, 0';

            // Draw Traces
            traces.forEach(trace => {
                const dx = mouse.x - trace.cx;
                const dy = mouse.y - trace.cy;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                // Turn on if mouse is near
                if (dist < 100) {
                    trace.brightness = 1;
                } else {
                    trace.brightness *= 0.93; // smooth fade out
                }
                
                // Random spontaneous turn on
                if (Math.random() < 0.0005) {
                    trace.brightness = 1;
                }

                ctx.beginPath();
                ctx.moveTo(trace.x1, trace.y1);
                ctx.lineTo(trace.x2, trace.y2);
                
                if (trace.brightness > 0.01) {
                    ctx.strokeStyle = `rgba(${baseColor}, ${0.1 + (trace.brightness * 0.8)})`;
                    ctx.lineWidth = 1 + trace.brightness * 1.5;
                    // Add a glow effect for active traces
                    ctx.shadowBlur = trace.brightness * 10;
                    ctx.shadowColor = `rgba(${baseColor}, ${trace.brightness})`;
                } else {
                    ctx.strokeStyle = `rgba(${baseColor}, 0.05)`;
                    ctx.lineWidth = 1;
                    ctx.shadowBlur = 0;
                }
                ctx.stroke();
            });
            
            // Draw Pads
            pads.forEach(pad => {
                const dx = mouse.x - pad.x;
                const dy = mouse.y - pad.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < 100) pad.brightness = 1;
                else pad.brightness *= 0.93;
                
                if (Math.random() < 0.0005) pad.brightness = 1;

                ctx.beginPath();
                ctx.arc(pad.x, pad.y, 3 + (pad.brightness * 1.5), 0, Math.PI * 2);
                
                if (pad.brightness > 0.01) {
                    ctx.fillStyle = `rgba(${baseColor}, ${0.2 + (pad.brightness * 0.8)})`;
                    ctx.shadowBlur = pad.brightness * 10;
                    ctx.shadowColor = `rgba(${baseColor}, ${pad.brightness})`;
                } else {
                    ctx.fillStyle = `rgba(${baseColor}, 0.1)`;
                    ctx.shadowBlur = 0;
                }
                ctx.fill();
            });

            // Reset shadow for next frame
            ctx.shadowBlur = 0;

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
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [darkMode]);

    return (
        <canvas 
            ref={canvasRef} 
            className="w-full h-full absolute inset-0 block z-0 pointer-events-none"
        />
    );
}

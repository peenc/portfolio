import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import { useThemeLang } from '../context/ThemeLangContext.jsx';

export default function InteractiveGlobe() {
    const canvasRef = useRef();
    const { darkMode } = useThemeLang();
    const [isLoaded, setIsLoaded] = useState(false);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

    useEffect(() => {
        let phi = 0;
        let width = 0;
        
        // Handle responsive width
        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener('resize', onResize);
        onResize();

        // Delay the fade-in slightly so WebGL has time to mount
        setTimeout(() => setIsLoaded(true), 100);

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: darkMode ? 1 : 0,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: darkMode ? [0.2, 0.2, 0.2] : [0.95, 0.95, 0.95],
            markerColor: [0.5, 0.5, 0.5],
            glowColor: darkMode ? [0.05, 0.05, 0.05] : [0.9, 0.9, 0.9],
            markers: [
                { location: [-22.9068, -43.1729], size: 0.1 } // Rio de Janeiro
            ],
            onRender: (state) => {
                // Auto rotate + manual drag
                if (!pointerInteracting.current) {
                    phi += 0.003;
                }
                state.phi = phi + pointerInteractionMovement.current;
                
                // Keep dimensions updated
                if (width > 0) {
                    state.width = width * 2;
                    state.height = width * 2;
                }
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        };
    }, [darkMode]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative pointer-events-auto">
            {/* The Globe Canvas */}
            <div className="w-[120%] md:w-[150%] max-w-[800px] aspect-square relative flex items-center justify-center -ml-[20%]">
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        contain: 'layout paint size',
                        cursor: 'grab'
                    }}
                    onPointerDown={(e) => {
                        pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                        canvasRef.current.style.cursor = 'grabbing';
                    }}
                    onPointerUp={() => {
                        pointerInteracting.current = null;
                        canvasRef.current.style.cursor = 'grab';
                    }}
                    onPointerOut={() => {
                        pointerInteracting.current = null;
                        canvasRef.current.style.cursor = 'grab';
                    }}
                    onMouseMove={(e) => {
                        if (pointerInteracting.current !== null) {
                            const delta = e.clientX - pointerInteracting.current;
                            pointerInteractionMovement.current = delta * 0.01;
                        }
                    }}
                    onTouchMove={(e) => {
                        if (pointerInteracting.current !== null && e.touches[0]) {
                            const delta = e.touches[0].clientX - pointerInteracting.current;
                            pointerInteractionMovement.current = delta * 0.01;
                        }
                    }}
                    className={`transition-opacity duration-1000 z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                
                {/* Shadow at base */}
                <div className={`absolute bottom-[10%] w-[60%] h-12 bg-black/5 dark:bg-black/30 blur-2xl rounded-[100%] pointer-events-none transition-opacity duration-1000 z-0 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
        </div>
    );
}

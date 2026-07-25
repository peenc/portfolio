import { useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { useNavigationType } from "react-router-dom";

export default function PageTransition({ children }) {
    const action = useNavigationType();

    useLayoutEffect(() => {
        if (action === "PUSH" || action === "REPLACE") {
            window.scrollTo(0, 0);
        }
    }, []); // <-- Só roda UMA vez ao montar o componente

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full flex-1"
        >
            {children}
        </motion.div>
    );
}

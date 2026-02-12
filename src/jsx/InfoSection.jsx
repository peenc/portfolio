import React from "react";

export default function InfoSection({ id, title, children }) {
    return (
        <section
            id={id}
            className="py-12 px-8 max-w-6xl mx-auto text-gray-300"
        >
            {title && (
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center relative">
                    {title}
                    <span className="block w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full"></span>
                </h2>

            )}

            <div className="space-y-4 text-lg leading-relaxed">
                {children}
            </div>
        </section>
    );
}

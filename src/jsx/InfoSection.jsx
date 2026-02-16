import React from "react";

export default function InfoSection({ id, title, children }) {
    return (
        <section
            id={id}
            className="
                py-10 md:py-16
                px-4 sm:px-6 md:px-8
                max-w-6xl
                mx-auto
                text-gray-300
            "
        >
            {title && (
                <h2 className="
                    text-2xl sm:text-3xl md:text-4xl
                    font-bold
                    text-gray-900 dark:text-white
                    mb-8 md:mb-12
                    text-center
                    relative
                ">
                    {title}
                    <span className="
                        block
                        w-12 md:w-16
                        h-1
                        bg-cyan-500
                        mx-auto
                        mt-3 md:mt-4
                        rounded-full
                    " />
                </h2>
            )}

            <div className="
                space-y-4
                text-sm sm:text-base md:text-lg
                leading-relaxed
            ">
                {children}
            </div>
        </section>
    );
}

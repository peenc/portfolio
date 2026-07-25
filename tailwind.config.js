/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bgcolor: 'var(--bg-color)',
                main: 'var(--main-color)',
                brand: 'var(--brand-color)',
                hoverbg: 'var(--hover-bg)'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
            letterSpacing: {
                widest: '.25em',
                superwide: '.5em',
            },
            animation: {
                'bounce-x': 'bounce-x 2s infinite',
            },
            keyframes: {
                'bounce-x': {
                    '0%, 100%': { transform: 'translateX(-10%)' },
                    '50%': { transform: 'translateX(10%)' },
                }
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}

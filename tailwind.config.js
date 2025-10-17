module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            translate: {
                '101': '101%',
            },
            keyframes: {
                shine: {
                    '0%': { 'background-position': '100%' },
                    '100%': { 'background-position': '-100%' },
                },
                marquee: {
                    'from': { transform: 'translateX(0%)' },
                    'to': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                shine: 'shine 5s linear infinite',
                marquee: 'marquee 15s linear infinite'
            },
        },
    },
    plugins: [],
};

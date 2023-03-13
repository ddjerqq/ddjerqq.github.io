/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#160505",
                secondary: "#c3a6a6",
                tertiary: "#301010",
                "black-100": "#250d0d",
                "black-200": "#250303",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 35px 120px -15px #211e35",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "hero-pattern": "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
};

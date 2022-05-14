module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#9e9e9e",
                    secondary: "#f6d860",
                    accent: "#37cdbe",
                    neutral: "#3d4451",
                    "base-100": "#ffffff",

                    //     ashcolor: "#c9c4ca",
                    //     github: "#211F1F",
                    //     qiita: "#55C500",

                    "--rounded-box": "0", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "0", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.25s", // duration of animation when you click on button
                    "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-text-case": "uppercase", // set default text transform for buttons
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "1px", // border width of buttons
                    "--tab-border": "1px", // border width of tabs
                    "--tab-radius": "0.5rem", // border radius of tabs
                },
            },
        ],
    },
};

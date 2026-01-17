import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                secondary: "var(--secondary)",
                accent: "#1E293B",
                // Theme-aware colors using CSS variables
                "bg-dark": "var(--bg-dark)",
                "bg-darker": "var(--bg-darker)",
                "surface": "var(--surface)",
                "surface-dark": "var(--surface-dark)",
                "text-main": "var(--text-main)",
                "text-muted": "var(--text-muted)",
                "card-bg": "var(--card-bg)",
                "border-color": "var(--border-color)",
            },
            fontFamily: {
                display: ["var(--font-oswald)", "sans-serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                "4xl": "2rem",
            },
            boxShadow: {
                glow: "0 0 15px rgba(15, 159, 93, 0.3)",
                "glow-lg": "0 0 20px rgba(15, 159, 93, 0.5)",
            },
        },
    },
    plugins: [],
};

export default config;

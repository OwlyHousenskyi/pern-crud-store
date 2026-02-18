import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        /* Your custom theme tokens */
        base: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        border: "var(--border)",

        /* Map DaisyUI tokens → your CSS variables */
        "base-100": "var(--surface)",
        "base-200": "var(--bg)",
        "base-content": "var(--text)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
    },
  },

  plugins: [daisyui],

  daisyui: {
    themes: false, // disables DaisyUI theme system
  },
};

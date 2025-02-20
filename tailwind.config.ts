import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "grey-10": "#E9FFF2",
        "theme-green": "#2BD170",
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(90deg, #1BB95D 0%, #2BD170 100%)",
      },
      animation: {
        "hover-move": "gradientMove 1s ease-in-out",
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0px 0px',  },
          '50%': { backgroundPosition: '100px 0px' },
          '100%': { backgroundPosition: '0px 0px' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

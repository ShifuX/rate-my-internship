import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "108": "27rem",
        "116": "29rem",
        "128": "32rem", // following the standard of 128 / 4 = 32
        "152": "38rem",
        "160": "40rem",
        "192": "48rem",
        "200": "50rem",
        "208": "52rem",
      },
      screens: {
        desktop2k: "1990px",
        desktop1080: "1700px",
        laptop: "1100px",
      },
    },
  },
  plugins: [],
};
export default config;

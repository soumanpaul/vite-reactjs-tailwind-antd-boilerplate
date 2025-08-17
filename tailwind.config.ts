// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./src/**/*.{js,ts,jsx,tsx, html}", "./src/**/*.{less,css,scss}"],
//   theme: { extend: {} },
//   plugins: [],
//   corePlugins: {
//     preflight: false,
//   },
// };

import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{css,less}", // include .less files
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;

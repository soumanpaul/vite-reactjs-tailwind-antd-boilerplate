import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      less: { javascriptEnabled: true },
    },
  },
  resolve: {
    alias: {
      "@style": path.resolve(__dirname, "src/styles"),
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@store": path.resolve(__dirname, "src/store"),
      "@locales": path.resolve(__dirname, "src/locales"),
      "@common": path.resolve(__dirname, "src/common"),
    },
  },
});

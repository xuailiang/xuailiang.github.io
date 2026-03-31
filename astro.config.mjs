import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://xuailiang.github.io",
  trailingSlash: "always",
  outDir: "./docs",
  vite: {
    plugins: [tailwindcss()],
  },
});

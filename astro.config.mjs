import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://your-github-username.github.io",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});

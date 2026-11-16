// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dhaval1627.github.io",
  base: "/dhaval-parmar-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});

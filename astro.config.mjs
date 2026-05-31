// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://reg-excavatii.ro",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow the build to optimize our local worksite photos.
    responsiveStyles: true,
  },
});

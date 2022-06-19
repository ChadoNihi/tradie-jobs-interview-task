import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      $app: path.resolve("./src/app"),
      $assets: path.resolve("./src/assets"),
      $lib: path.resolve("./src/lib"),
    },
  },
  plugins: [svelte()],
});

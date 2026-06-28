import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbywbAUxQ0YGWiQPqwjXAOXPdVimctq63_5CsxUUDm4y8icjFV6qK9Bdau1sWpEpB-ZQ/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbz_RYEVxsjsuvcd0lkQZTTkgy3S3-23SVe1XyO5t8WC0ZgLci9BWTZrP7UEDFsbnZYDeA/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
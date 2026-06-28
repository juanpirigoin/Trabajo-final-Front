import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbx4iEzv3sHG-JTqmOx59cVWHPvEGDCH0dBkIUIybLD6JmSJ_brBYCyTymtU9IwzEI2wSA/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});
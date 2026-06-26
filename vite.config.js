import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://script.google.com/macros/s/AKfycbybf-MxCqKAjPl0XyBCpRhd37bGk-FGBkwlhc1FxSkBGkjizwRGKg9btCUdlMda0Oas/exec",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});